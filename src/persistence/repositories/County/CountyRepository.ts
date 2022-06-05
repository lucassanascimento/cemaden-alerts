import { County } from '@domain/County/County';
import { ICountyRepository } from '@domain/County/repositories/ICountyRepository';
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CountiesRepository implements ICountyRepository {
  constructor(
    @inject('MongoService')
    private mongoService: IMongoService
  ) { }

  add = async (data: County): Promise<void> => {
    const countyCollection = this.mongoService.getCollection('county')
    await countyCollection.insertOne(data)
  }

  get = async (code: string): Promise<County> => {
    const countyCollection = this.mongoService.getCollection('county')
    const county = countyCollection.findOne({ ibgeId: code }) as unknown as County
    return county;
  }
}