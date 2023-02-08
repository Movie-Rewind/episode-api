class SaveEpisodeResponse {
	constructor(episode) {
		this.episode = episode.toObject();
	}
}

module.exports = SaveEpisodeResponse;
