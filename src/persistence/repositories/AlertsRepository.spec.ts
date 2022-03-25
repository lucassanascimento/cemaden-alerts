import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository'
import { MongoHelper } from '@infrastructure/db/mongodb/helper/MongoHelper'
import { FakeAlertsRepository } from '@test/repositories/FakeAlertsRepository'
import { AlertsRepository } from './AlertsRepository'

const makeSut = () => {
  const fakeAlertsRepository: IAlertsRepository = new FakeAlertsRepository()
  return { fakeAlertsRepository }
}

describe('should validate mongodb', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('Should validation if db is connected', async () => {
    expect(1 + 1).toBe(2)
  })
})