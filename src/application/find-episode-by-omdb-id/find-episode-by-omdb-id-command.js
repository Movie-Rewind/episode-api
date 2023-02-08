class FindEpisodeByOmdbIdCommand {
	constructor({omdb_id}) {
		this._omdb_id = omdb_id;
	}

	get omdb_id() {
		return this._omdb_id;
	}

	set omdb_id(omdb_id) {
		this._omdb_id = omdb_id;
	}
}


module.exports = FindEpisodeByOmdbIdCommand;
