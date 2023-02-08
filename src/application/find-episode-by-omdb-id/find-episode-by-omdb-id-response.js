class FindEpisodeByOmdbIdResponse {
	constructor(episode) {
		this.episode = episode.toObject();
	}
}

module.exports = FindEpisodeByOmdbIdResponse;
