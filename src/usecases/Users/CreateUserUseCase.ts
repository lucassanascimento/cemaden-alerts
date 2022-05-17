import { IUsersRepository } from "@domain/Users/repositories/IUsers";
import { ICreateUserUseCase } from "@domain/Users/usecases/ICreateUserUseCase";
import { User } from "@domain/Users/User";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateUserUseCase implements ICreateUserUseCase {
  constructor(
    @inject('UsersRespository')
    private userRepository: IUsersRepository
  ) { }

  handle = async (user: Omit<User, 'id'>) => {
    await this.userRepository.add(user)
  }
}