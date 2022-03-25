import { AlertsStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { IListAlertsUseCase } from '@domain/Alerts/usecases';
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import { inject, injectable, singleton } from 'tsyringe'

@injectable()
export class ListAlertsUseCase implements IListAlertsUseCase {
  constructor(
    @inject('CemandeService')
    private cemandenService: ICemadenService,

    @inject('AlertsRepository')
    private altersRepository: IAlertsRepository
  ) { }

  async handle(): Promise<AlertsStatus> {
    const alerts = await this.cemandenService.listAlerts()
    return this.makeAlertsStatus(alerts)
  }

  private makeAlertsStatus = (data: ICemadenService.Params): AlertsStatus => {
    return {
      alerts: data.alertas.map((alert) => ({
        alertCode: alert.cod_alerta,
        ibgeCode: alert.codibge,
        event: alert.evento,
        level: alert.nivel,
        status: alert.status,
        createdAt: alert.datahoracriacao,
        updatedAt: alert.ult_atualizacao,
      })),
      updatedAt: data.atualizado
    }
  }
}
