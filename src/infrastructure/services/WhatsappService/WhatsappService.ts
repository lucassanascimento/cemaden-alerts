import { logger } from '@commons/utils/logger'
import { injectable } from 'tsyringe'
import { create, Whatsapp } from '@wppconnect-team/wppconnect';
import { IWhatsappService } from './IWhatsappService';

@injectable()
export class WhatsappService implements IWhatsappService{
  private client: Whatsapp
  constructor(
  ) {
    this.handle()
  }

  private handle = async (): Promise<void> => {
    const start = (client: Whatsapp) => {
      this.client = client
    }
    create({
      session: 'whats', //Pass the name of the client you want to start the bot
      catchQR: (base64Qrimg: string) => {
      },
      statusFind: (statusSession: string, session: string) => {
        console.log('Status Session: ', statusSession); //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken
        //Create session wss return "serverClose" case server for close
        console.log('Session name: ', session);
      },
      headless: false, // Headless chrome
      devtools: false, // Open devtools by default
      useChrome: true, // If false will use Chromium instance
      debug: false, // Opens a debug session
      logQR: true, // Logs QR automatically in terminal
      browserWS: '', // If u want to use browserWSEndpoint
      browserArgs: [''], // Parameters to be added into the chrome browser instance
      puppeteerOptions: {}, // Will be passed to puppeteer.launch
      disableWelcome: false, // Option to disable the welcoming message which appears in the beginning
      updatesLog: true, // Logs info updates automatically in terminal
      autoClose: 60000, // Automatically closes the wppconnect only when scanning the QR code (default 60 seconds, if you want to turn it off, assign 0 or false)
      tokenStore: 'file', // Define how work with tokens, that can be a custom interface
      folderNameToken: './tokens', //folder name when saving tokens
      sessionToken: {
        WABrowserId: '"UnXjH....."',
        WASecretBundle: '{"key":"+i/nRgWJ....","encKey":"kGdMR5t....","macKey":"+i/nRgW...."}',
        WAToken1: '"0i8...."',
        WAToken2: '"1@lPpzwC...."',
      }
    })
      .then((client: Whatsapp) => start(client))
      .catch((error: Error) => logger.info(error));
  }

  sendText = async (to: string, content: string): Promise<void> => {
    this.client.sendText(`${to}@c.us`, content);
  }
}