import { IUsersRepository } from "@domain/Users/repositories/IUsers";
import { IMongoService } from "@infrastructure/db/mongodb/IMongoService";
import { inject, injectable } from "tsyringe";
import { User } from '@domain/Users/User'

@injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @inject('MongoService')
    private mongoService: IMongoService
  ) { }

  add = async (data: Omit<User, "id">): Promise<void> => {
    const usersCollection = this.mongoService.getCollection('users')
    await usersCollection.insertOne(data)
  }
}
