import { User } from "../User";

export interface ICreateUserUseCase {
  handle(data: Omit<User, 'id'>): Promise<void>
}