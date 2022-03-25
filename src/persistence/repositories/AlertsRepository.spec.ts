import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository'
import { MongoHelper } from '@infrastructure/db/mongodb/helper/MongoHelper'
import { AlertsRepository } from './AlertsRepository'

const makeSut = (): AlertsRepository => {
  return new AlertsRepository()
}

describe('should validate mongodb', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
})