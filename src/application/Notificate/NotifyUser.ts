import { AlertsDetail } from "@domain/Alerts";
import { ISendMessageWhatsAppUseCase } from "@domain/Message/usecase/ISendMessageWhatsAppUseCase";
import { IListUsersUseCase } from "@domain/Users/usecases/IListUsersUseCase";
import { IIbgeService } from "@infrastructure/services/IbgeService/IIbgeService";
import { inject, injectable } from "tsyringe";
import { INotifyUser } from "./INotifyUser";

@injectable()
export class NotifyUser implements INotifyUser {
  constructor(
    @inject('IbgeService')
    private readonly IbgeService: IIbgeService,

    @inject('ListUsersUseCase')
    private readonly listUsersUseCase: IListUsersUseCase,

    @inject('SendMessageWhatsAppUseCase')
    private readonly sendMessageWhatsAppUseCase: ISendMessageWhatsAppUseCase,

  ) { }

  async handle(alerts: AlertsDetail[]): Promise<void> {
    for (let i = 0; i < alerts.length; i++) {
      const userToNotify = await this.listUsersUseCase.handle({ city: alerts[i].county });
      const message = `⚠️ Alertas-Cemaden ⚠️ \nAtencão, sua cidade está com ${alerts[i].event}`
      const userToNotifyPromise = userToNotify.map((user) => this.sendMessageWhatsAppUseCase.handle(user.number, message))
      await Promise.all(userToNotifyPromise)
    }
  }
}
