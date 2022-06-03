import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { ISendMessageWhatsAppUseCase } from "@domain/Message/usecase/ISendMessageWhatsAppUseCase";
import {  ok, serverError } from "@presentation/interfaces";
import { inject, injectable } from "tsyringe";
import { IMessageController, MessageModel } from "./interfaces/IMessageController";

@injectable()
export class MessageController implements IMessageController {
  constructor(
    @inject('SendMessageWhatsAppUseCase')
    private sendMessageWhatsAppUseCase: ISendMessageWhatsAppUseCase
  ) { }

  send = async (data: MessageModel): Promise<IControllerResponseModel> => {
    const { number, text } = data
    try {
      await this.sendMessageWhatsAppUseCase.handle(number, text)
      return ok();
    } catch (error) {
      return serverError(error as Error)
    }
  }
}