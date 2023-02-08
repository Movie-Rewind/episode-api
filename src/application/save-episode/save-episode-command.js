class SaveEpisodeCommand {
	constructor({
		id,
		air_date,
		crew,
		episode_number,
		guest_stars,
		name,
		overview,
		omdb_id,
		production_code,
		season_number,
		still_path,
		vote_average,
		vote_count,
	}) {
		this._id = id;
		this._air_date = air_date;
		this._crew = crew;
		this._episode_number = episode_number;
		this._guest_stars = guest_stars;
		this._name = name;
		this._overview = overview;
		this._omdb_id = omdb_id;
		this._production_code = production_code;
		this._season_number = season_number;
		this._still_path = still_path;
		this._vote_average = vote_average;
		this._vote_count = vote_count;
	}

	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	get air_date() {
		return this._air_date;
	}

	set air_date(value) {
		this._air_date = value;
	}

	get crew() {
		return this._crew;
	}

	set crew(value) {
		this._crew = value;
	}

	get episode_number() {
		return this._episode_number;
	}

	set episode_number(value) {
		this._episode_number = value;
	}

	get guest_stars() {
		return this._guest_stars;
	}

	set guest_stars(value) {
		this._guest_stars = value;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get overview() {
		return this._overview;
	}

	set overview(value) {
		this._overview = value;
	}

	get omdb_id() {
		return this._omdb_id;
	}

	set omdb_id(value) {
		this._omdb_id = value;
	}

	get production_code() {
		return this._production_code;
	}

	set production_code(value) {
		this._production_code = value;
	}

	get season_number() {
		return this._season_number;
	}

	set season_number(value) {
		this._season_number = value;
	}

	get still_path() {
		return this._still_path;
	}

	set still_path(value) {
		this._still_path = value;
	}

	get vote_average() {
		return this._vote_average;
	}

	set vote_average(value) {
		this._vote_average = value;
	}

	get vote_count() {
		return this._vote_count;
	}

	set vote_count(value) {
		this._vote_count = value;
	}
}

module.exports = SaveEpisodeCommand;
