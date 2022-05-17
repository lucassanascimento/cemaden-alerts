import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { ICreateUserUseCase } from "@domain/Users/usecases/ICreateUserUseCase";
import { created, serverError } from "@presentation/interfaces";
import { inject, injectable } from "tsyringe";
import { IUserInput, IUsersController } from "./interfaces/IUsersController";

@injectable()
export class UsersController implements IUsersController {
  constructor(
    @inject('CreateUserUseCase')
    private createUserUseCase: ICreateUserUseCase
  ) { }

  add = async (data: IUserInput): Promise<IControllerResponseModel> => {
    try {
      await this.createUserUseCase.handle(data)
      return created()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}