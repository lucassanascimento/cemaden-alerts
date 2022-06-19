import { AlertHistory, AlertStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { IMongoService } from '@infrastructure/db/mongodb/IMongoService';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AlertsRepository implements IAlertsRepository {
  constructor(
    @inject('MongoService')
    private mongoService: IMongoService
  ) { }

  add = async (data: AlertStatus): Promise<void> => {
    const alertsCollection = await await this.mongoService.getCollection('alertshistory')
    await alertsCollection.insertOne(data)
  }

  list = async (): Promise<AlertHistory[]> => {
    const alertsCollection = await this.mongoService.getCollection('alertshistory')
    const alerts = alertsCollection.find().toArray() as unknown as AlertHistory[]
    return alerts;
  }
}