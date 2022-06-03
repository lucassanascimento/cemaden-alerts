import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { User } from "@domain/Users/User";

export interface IMessageController {
  send: (data: MessageModel) => Promise<IControllerResponseModel>
}

export interface IMessage {
  text: string,
  number: string
}

export type MessageModel = IMessage