import { User } from "../User";

export interface IUsersRepository {
  add: (data: Omit<User, 'id'>) => Promise<void>;
  list: (filter?: {[key: string]: string}, page?: number, pageSize?: number) => Promise<User[]>;
}