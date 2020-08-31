const app = require('./index');
const { PORT } = require('./config');
const logger = require('./lib/logger');
const log = logger(app);

const server = app.listen(PORT, () => {
	log.info('Express server listening on http://localhost:%d', server.address().port);
});
