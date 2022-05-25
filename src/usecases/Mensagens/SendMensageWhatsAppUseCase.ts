import { logger } from '@commons/utils/logger'
import { injectable } from 'tsyringe'
import { ISendMensageWhatsAppUseCase } from '@domain/Mensage/usecase/ISendMensageWhatsAppUseCase'
import puppeteer from 'puppeteer'

@injectable()
export class SendMensageWhatsAppUseCase implements ISendMensageWhatsAppUseCase {
  constructor() { }

  handle = async (): Promise<void> => {
    logger.info('puppeteer')
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--use-gl=egl'],
    });
    const page = await browser.newPage();
    await page.goto('https://pptr.dev/');
    await page.screenshot({ path: 'example.png' });
    await browser.close();
  }
}
