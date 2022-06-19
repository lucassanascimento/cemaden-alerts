import { User } from "../User";

export interface IListUsersUseCase {
  handle(filter?: {[key: string]: string}, page?: number, pageSize?: number): Promise<User[]>
}