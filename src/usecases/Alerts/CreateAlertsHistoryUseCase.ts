import { AlertStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { ICreateAlertsHistoryUseCase } from '@domain/Alerts/usecases';
import { ICemadenService } from '@infrastructure/services/CemadenService/ICemadenService';
import { inject, injectable, singleton } from 'tsyringe'

@injectable()
export class CreateAlertsHistoryUseCase implements ICreateAlertsHistoryUseCase {
  constructor(
    @inject('AlertsRepository')
    private altersRepository: IAlertsRepository
  ) { }

  async handle(alert: ICreateAlertsHistoryUseCase.Params): Promise<void> {
    const alerts = this.makeAlertsStatus(alert)
    await this.altersRepository.add(alerts)
  }

  private makeAlertsStatus = (data: ICemadenService.Params): Omit<AlertStatus, 'id'> => {
    return {
      alerts: data.alertas.map((alert) => ({
        alertCode: alert.cod_alerta,
        ibgeCode: alert.codibge,
        event: alert.evento,
        level: alert.nivel,
        status: alert.status,
        county: alert.municipio,
        uf: alert.uf,
        createdAt: alert.datahoracriacao,
        updatedAt: alert.ult_atualizacao,
      })),
      updatedAt: data.atualizado
    }
  }
}
