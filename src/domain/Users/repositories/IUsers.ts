import { User } from "../User";

export interface IUsersRepository {
  add: (data: Omit<User, 'id'>) => Promise<void>;
}