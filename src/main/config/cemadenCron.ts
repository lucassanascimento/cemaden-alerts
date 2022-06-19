import { ICemaden } from '@application/interfaces/ICemaden';
import { INotifyUser } from '@application/Notificate/INotifyUser';
import { logger } from '@commons/utils/logger';
import { ICreateAlertsHistoryUseCase } from '@domain/Alerts/usecases';
import { Alertas, ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import express from 'express'
import cron from 'node-cron';
import { container, inject, injectable } from 'tsyringe';

const cemadenCron = express()

@injectable()
class Cemaden implements ICemaden {
  constructor(
    @inject('CemadenService')
    private cemadenService: ICemadenService,

    @inject('CreateAlertsHistoryUseCase')
    private readonly createAlertsHistoryUseCase: ICreateAlertsHistoryUseCase,

    @inject('NotifyUser')
    private readonly notifyUser: INotifyUser,
  ) { }

  handle = async (): Promise<void> => {
    try {
      const alerts = await this.cemadenService.listAlerts()
      await this.createAlertsHistoryUseCase.handle(alerts)
      await this.notifyUser.handle(this.makeAlerts(alerts.alertas))
      logger.info('Data saved successfully')
    } catch (error) {
      logger.error(error, 'Error to capture CEMADEN Alerts')
    }
  }

  private makeAlerts(alerts: Alertas[]) {
    return alerts.map(alert => ({
      alertCode: alert.cod_alerta,
      ibgeCode: alert.codibge,
      event: alert.evento,
      level: alert.nivel,
      status: alert.status,
      county: alert.municipio,
      uf: alert.uf,
      createdAt: alert.datahoracriacao,
      updatedAt: alert.ult_atualizacao,
    }))
  }
}

cron.schedule("*/10 * * * *", () => {
  const alertsController = container.resolve(Cemaden)
  alertsController.handle()
  logger.info("Runs CRON CEMADEN every 10 min")
});


export default cemadenCron