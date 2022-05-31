import { logger } from '@commons/utils/logger'
import { injectable } from 'tsyringe'
import { ISendMessageWhatsAppUseCase } from '@domain/Message/usecase/ISendMessageWhatsAppUseCase'
import { create, Whatsapp } from 'venom-bot';

@injectable()
export class SendMessageWhatsAppUseCase implements ISendMessageWhatsAppUseCase {
  private client: Whatsapp;
  constructor(
  ) {
    this.handle()
  }

  handle = async (): Promise<void> => {
    const qr = (base64Qrimg: string) => {
      console.log("AQuiiiiiiiii", base64Qrimg)
    }
    const status = (statusSession: string, session: string) => { }

    const start = (client: Whatsapp) => {
      this.client = client;
    }
    create('send-alerts', qr, status)
      .then((client) => start(client))
      .catch(error => logger.info(error))
  }
}
