const EpisodeRepository = require('../repositories/episode-repository');

class MongoEpisodeRepository extends EpisodeRepository {
	constructor({mongoDbHandler, episodeDocumentParser}) {
		super();
		this.mongoDbHandler = mongoDbHandler;
		this.episodeDocumentParser = episodeDocumentParser;
	}

	async save(episode) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			const episodeDocument = this.episodeDocumentParser.toDocument(episode);
			await db.collection(this.collection).insertOne(episodeDocument);
		} catch (e) {
			throw new Error(e);
		}
	}
	async findByOmdbId(omdb_id) {
		const db = await this.mongoDbHandler.getInstance();
		try {
			console.log('test', omdb_id);
			const episodeDocument = await db.collection(this.collection).findOne({omdb_id: parseInt(omdb_id)});
			console.log('episode', episodeDocument);
			return episodeDocument ? this.episodeDocumentParser.toDomain(episodeDocument) : null;
		} catch (e) {
			throw new Error(e);
		}
	}
}


module.exports = MongoEpisodeRepository;
