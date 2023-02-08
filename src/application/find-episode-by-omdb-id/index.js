const FindEpisodeByOmdbIdResponse = require('./find-episode-by-omdb-id-response');

class FindEpisodeByOmdbId {
	constructor({episodeRepository}) {
		this.episodeRepository = episodeRepository;
	}

	async find({omdb_id}) {
		const episode = await this.episodeRepository.findByOmdbId(omdb_id);
		return new FindEpisodeByOmdbIdResponse(Object.freeze(episode));
	}
}


module.exports = FindEpisodeByOmdbId;
