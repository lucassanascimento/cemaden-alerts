import { ICemaden } from '@application/interfaces/ICemaden';
import { logger } from '@commons/utils/logger';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { ICreateAlertsHistoryUseCase } from '@domain/Alerts/usecases';
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import express from 'express'
import cron from 'node-cron'
import { container, inject, injectable } from 'tsyringe';

const cemadenCron = express()

@injectable()
class Cemaden implements ICemaden {
  constructor(
    @inject('CemadenService')
    private cemadenService: ICemadenService,

    @inject('CreateAlertsHistoryUseCase')
    private readonly createAlertsHistoryUseCase: ICreateAlertsHistoryUseCase,
  ) { }

  handle = async (): Promise<void> => {
    try {
      const alerts = await this.cemadenService.listAlerts()
      await this.createAlertsHistoryUseCase.handle(alerts)
      console.log('Data saved successfully')
    } catch (error) {
      logger.error(error, 'Error to capture CEMADEN Alerts')
    }
  }
}

cron.schedule("*/10 * * * * *", () => {
  const alertsController = container.resolve(Cemaden)
  alertsController.handle()
  console.log("Runs CRON CEMADEN every 5 seg")
});

export default cemadenCron