import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { ISendMessageWhatsAppUseCase } from "@domain/Message/usecase/ISendMessageWhatsAppUseCase";
import { created, serverError } from "@presentation/interfaces";
import { inject, injectable } from "tsyringe";
import { IMessageController } from "./interfaces/IMessageController";

@injectable()
export class MessageController implements IMessageController {
  constructor(
    @inject('SendMessageWhatsAppUseCase')
    private sendMessageWhatsAppUseCase: ISendMessageWhatsAppUseCase
  ) { }

  send = async (): Promise<IControllerResponseModel> => {
    try {
      await this.sendMessageWhatsAppUseCase.handle()
      return created()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}