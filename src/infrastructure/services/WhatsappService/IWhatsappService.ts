export interface IWhatsappService {
  sendText: (to: string, content: string) => Promise<void>;
}