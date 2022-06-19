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
    const usersCollection = await this.mongoService.getCollection('users')
    await usersCollection.insertOne(data)
  }

  list = async (filter?: { [key: string]: string }, page?: number, pageSize?: number): Promise<User[]> => {
    const usersCollection = await this.mongoService.getCollection('users')
    const usersData = await usersCollection.find({ ...filter }).skip(page || 0).limit(pageSize || 30).toArray() as unknown as Users[]
    const users = usersData.map((user) => ({
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      city: user.city,
      state: user.state,
      number: user.number,
    }));
    return users;
  }
}
export interface Users {
  _id: string,
  name: string,
  email: string,
  city: string,
  state: string,
  number: string
}
