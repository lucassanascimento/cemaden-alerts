import { IWhatsappService } from '../../infrastructure/services/WhatsappService/IWhatsappService';
import { inject, injectable } from 'tsyringe'
import { ISendMessageWhatsAppUseCase } from '@domain/Message/usecase/ISendMessageWhatsAppUseCase'
@injectable()
export class SendMessageWhatsAppUseCase implements ISendMessageWhatsAppUseCase {
  constructor(
    @inject('WhatsappService')
    private whatsappService: IWhatsappService
  ) { }

  handle = async (to: string, text: string): Promise<void> => {
    this.whatsappService.sendText(to, text)
  }
}
