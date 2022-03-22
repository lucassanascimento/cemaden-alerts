import { MongoHelper } from '../helper/MongoHelper'
import { AltersRepository } from './AltersRepository'

const makeSut = (): AltersRepository => {
  return new AltersRepository()
}

describe('should validate mongodb', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
})