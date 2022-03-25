import { ICemaden } from '@application/interfaces/ICemaden';
import { logger } from '@commons/utils/logger';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import express from 'express'
import cron from 'node-cron'
import { container, inject, injectable } from 'tsyringe';

const cemadenCron = express()

@injectable()
class Cemaden implements ICemaden {
  constructor(
    @inject('AlertsRepository')
    private readonly alertsRepository: IAlertsRepository,

    @inject('CemandeService')
    private cemandenService: ICemadenService,
  ) { }

  handle = async (): Promise<void> => {
    try {
      const alerts = await this.cemandenService.listAlerts()
      await this.alertsRepository.add(alerts)
      logger.info('Data saved successfully')
    } catch (error) {
      logger.error(error, 'Error to capture CEMADEN Alerts')
    }
  }
}

cron.schedule("*/5 * * * * *", () => {
  const alertsController = container.resolve(Cemaden)
  alertsController.handle()
  logger.info("Runs CRON CEMADEN every 5 seg")
});

export default cemadenCron