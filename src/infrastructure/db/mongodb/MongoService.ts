import { Collection, MongoClient } from 'mongodb'
import env from '@main/config/env'
import { IMongoService } from './IMongoService';
import { logger } from '@commons/uteis/logger';

export class MongoService implements IMongoService {
  private url: string
  private client: MongoClient

  constructor() {
    this.url = env.mongodb.mongoUri
    MongoClient.connect(this.url)
      .then((client) => {
        this.client = client
        logger.info('Mongodb connected')
    })
  }

  disconnect = async (): Promise<void> => {
    await this.client.close()
  }

  getCollection = (name: string): Collection => {
    return this.client.db().collection(name)
  }
}
