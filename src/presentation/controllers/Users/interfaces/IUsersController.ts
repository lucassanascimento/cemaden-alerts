import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { User } from "@domain/Users/User";

export interface IUsersController {
  add: (data: IUserInput) => Promise<IControllerResponseModel>
}

export interface IUserInput {
  name: string,
  email: string,
  city: string,
  state: string,
  number: string
}

export type UserModel = User