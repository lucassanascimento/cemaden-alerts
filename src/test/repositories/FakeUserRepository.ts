import { IUsersRepository } from "@domain/Users/repositories/IUsers";
import { User } from "@domain/Users/User";

export class FakeUserRepository implements IUsersRepository {
  add = async (user: Omit<User, 'id'>)=> {}
}