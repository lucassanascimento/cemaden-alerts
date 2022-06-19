import { IUsersRepository } from "@domain/Users/repositories/IUsers";
import { IListUsersUseCase } from "@domain/Users/usecases/IListUsersUseCase";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListUsersUseCase implements IListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) { }
  
  handle = async (filter?: {[key: string]: string}, page?: number, pageSize?: number) => {
    const users = await this.usersRepository.list(filter, page, pageSize)
    return users;
  }
}