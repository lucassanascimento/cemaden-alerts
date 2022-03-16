import { AlertsStatus } from '@domain/Alerts';
import { IListAlertsUseCase } from '@domain/Alerts/usecases';
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import { autoInjectable, inject, injectable, singleton } from 'tsyringe'

@injectable()
export class ListAlertsUseCase implements IListAlertsUseCase
{
  constructor(
    @inject('CemandeService')
    private cemandenService: ICemadenService
  ) { }
  async handle(): Promise<AlertsStatus>
  {
    const ale = await this.cemandenService.listAlerts()
    return {
      alerts: ale.alertas.map((alert) => ({
        alertCode: alert.cod_alerta,
        ibgeCode: alert.codibge,
        event: alert.evento,
        level: alert.nivel,
        status: alert.status,
        createdAt: alert.datahoracriacao,
        updatedAt: alert.ult_atualizacao,
      })),
      updatedAt: ale.atualizado
    }
  }
}
