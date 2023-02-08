const SaveEpisodeResponse = require('./save-episode-response');
const Episode = require('../../domain/Episode');
const EpisodeAlreadyExistsError = require('../../domain/errors/episode-already-exists-error');

class SaveEpisode {
	constructor({episodeRepository, idGenerator}) {
		this.episodeRepository = episodeRepository;
		this.idGenerator = idGenerator;
	}

	async save(episode) {
		const episodeDomain = new Episode(this._parseIds(episode));

		const episodeDocument = await this.episodeRepository.findByOmdbId(episode.omdb_id);
		await this._checkIfEpisodeExists(episodeDocument);

		await this.episodeRepository.save(episodeDomain);

		return new SaveEpisodeResponse(episodeDomain);
	}

	_checkIfEpisodeExists(episodeDocument) {
		if (episodeDocument) throw new EpisodeAlreadyExistsError('Episode Already Exists');
	}

	_parseIds(episode) {
		episode.omdb_id = episode.id;
		episode.id = this._generateEpisodeId();
		return episode;
	}

	_generateEpisodeId() {
		return this.idGenerator.generate();
	}
}

module.exports = SaveEpisode;
