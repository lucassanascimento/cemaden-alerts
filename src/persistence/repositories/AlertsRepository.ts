import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AlertsRepository implements IAlertsRepository {
  constructor(
    @inject('MongoService')
    private mongoService: IMongoService
  ) { }
  
   add = async (): Promise<void> => {
    const alertsCollection = this.mongoService.getCollection('alertsHistory')
    const documentsTotal = await alertsCollection.countDocuments()
  }
}