const awilix = require('awilix');

const {v4: uuidv4} = require('uuid');
const mongoDbHandler = require('./infrastructure/persistance/mongo/db-handler');
const {logger} = require('@Movie-Rewind/core');
const {idGenerator} = require('@Movie-Rewind/core');
const MUUID = require('uuid-mongodb');

const SaveEpisode = require('./application/save-episode');
const FindEpisodeByOmdbId = require('./application/find-episode-by-omdb-id');

const MongoEpisodeRepository = require('./infrastructure/persistance/mongo/mongo-episode-repository');
const episodeDocumentParser = require('./domain/services/episode-document-parser');
const container = awilix.createContainer({
	injectionMode: awilix.InjectionMode.PROXY,
});

container.register({
	mongoDbHandler: awilix.asFunction(mongoDbHandler),
	logger: awilix.asValue(logger),
	idGenerator: awilix.asFunction(idGenerator),
	muuid: awilix.asValue(MUUID),
	uuidv4: awilix.asValue(uuidv4),
	saveEpisode: awilix.asClass(SaveEpisode),
	findEpisodeByOmdbId: awilix.asClass(FindEpisodeByOmdbId),
	episodeRepository: awilix.asClass(MongoEpisodeRepository),
	episodeDocumentParser: awilix.asFunction(episodeDocumentParser),
});

module.exports = container;
