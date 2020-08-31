const app = require('./index');
const logger = require('./lib/logger');
const log = logger(app);

const server = app.listen(app.get('port'), function() {
	log.info('Express server listening on http://localhost:%d', server.address().port);
});
