const express = require('express');
const router = express.Router();
const _ = require('lodash');
const logger = require('../lib/logger');
const log = logger();
const jsonschema = require('jsonschema');
const addUserSchema = require('../schema/addUserSchema.json');

const users = require('../init_data.json').data;
let curId = _.size(users);

/* GET users listing. */
router.get('/', (req, res) => {
	res.json(_.toArray(users));
});

/* Create a new user */
router.post('/', (req, res, next) => {
	const user = req.body;
	const result = jsonschema.validate(user, addUserSchema);
	if (!result.valid) {
		const errors = result.errors.map((error) => error.message);
		return res.status(400).json({ errors: errors });
	}
	user.id = curId++;
	if (!user.state) user.state = 'pending';

	users[user.id] = user;
	log.info('Created user', user);
	res.json(user);
});

/* Get a specific user by id */
router.get('/:id', (req, res, next) => {
	const user = users[req.params.id];
	if (!user) return next();

	res.json(users[req.params.id]);
});

/* Delete a user by id */
router.delete('/:id', (req, res) => {
	const user = users[req.params.id];
	delete users[req.params.id];
	res.status(204);
	log.info('Deleted user', user);
	res.json(user);
});

/* Update a user by id */
router.put('/:id', (req, res, next) => {
	const user = req.body;
	if (user.id != req.params.id) return next(new Error('ID paramter does not match body'));

	users[user.id] = user;
	log.info('Updating user', user);
	res.json(user);
});

module.exports = router;
