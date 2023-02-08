const {ApplicationError} = require('@Movie-Rewind/core');

class EpisodeAlreadyExistsError extends ApplicationError {
	constructor(message) {
		super(message);
		this.message = 'EpisodeAlreadyExistsError';
	}
}

module.exports = EpisodeAlreadyExistsError;
