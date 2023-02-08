const express = require('express');
const router = express.Router();
const SaveEpisodeCommand = require('../../application/save-episode/save-episode-command');
const FindEpisodeByOmdbIdCommand = require('../../application/find-episode-by-omdb-id/find-episode-by-omdb-id-command');
const EpisodeAlreadyExistsError = require('../../domain/errors/episode-already-exists-error');
const container = require('../../container');

router.post('/', async (req, res, next) => {
	const episode = req.body;
	try {
		const command = new SaveEpisodeCommand(episode);
		const saveEpisode = container.resolve('saveEpisode');
		const response = await saveEpisode.save(command);
		res.status(201).json(response);
	} catch (error) {
		if (error instanceof EpisodeAlreadyExistsError) {
			return res.status(400).json({
				message: error.message,
				description: 'The id is in database',
			});
		}
		next(error);
	}
});

router.get('/omdb/:omdb_id', async (req, res, next) => {
	const {omdb_id} = req.params;
	try {
		const command = new FindEpisodeByOmdbIdCommand({omdb_id});
		const findEpisodeByOmdbId = container.resolve('findEpisodeByOmdbId');
		const response = await findEpisodeByOmdbId.find(command);
		res.status(200).json({...response});
	} catch (error) {
		console.error(error);
		res.status(500).json({error: error.toString()});
	}
});
module.exports = router;
