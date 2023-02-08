const Episode = require('../Episode');

const mongoEpisodeParser = ({muuid}) => {
	return {
		toDomain: ({
			_id,
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
		}) => {
			const id = (muuid.from(_id)).toString();
			return new Episode({
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
			});
		},

		toDocument: ({
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
		}) => {
			const _id = muuid.from(id);
			return {
				_id,
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
			};
		},
	};
};

module.exports = mongoEpisodeParser;
