import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { ISendMensageWhatsAppUseCase } from "@domain/Mensage/usecase/ISendMensageWhatsAppUseCase";
import { created, serverError } from "@presentation/interfaces";
import { inject, injectable } from "tsyringe";
import { IMessageController } from "./interfaces/IMessageController";

@injectable()
export class MessageController implements IMessageController {
  constructor(
    @inject('SendMensageWhatsAppUseCase')
    private sendMensageWhatsAppUseCase: ISendMensageWhatsAppUseCase
  ) { }

  send = async (): Promise<IControllerResponseModel> => {
    try {
      await this.sendMensageWhatsAppUseCase.handle()
      return created()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}