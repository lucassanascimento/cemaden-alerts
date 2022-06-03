export interface ISendMessageWhatsAppUseCase {
  handle(to: string, text: string): Promise<void>
}
