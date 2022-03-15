import { AlertsStatus } from '@domain/Alerts';
import { IListAlertsUseCase } from '@domain/Alerts/usecases';
import { ICemadenService } from '@infrastructure/services/ICemandenService';
import { autoInjectable, inject, injectable, singleton } from 'tsyringe'

@injectable()
export class ListAlertsUseCase implements IListAlertsUseCase
{
  constructor(
    // // @inject('CemadenService')
    // private cemandenService: ICemadenService
  ) { }
  async handle(): Promise<AlertsStatus>
  {
    const alerts = {
      alerts: [
        {
          codAlerta: 721,
          codIbge: 3154606,
          event: "Movimentos de Massa - Moderado",
          level: "Moderado",
          status: 1,
          createdAt: "05-02-2022 05:23:03",
          updatedAt: "05-02-2022 05:23:03",
        }
      ],
      upatedAt: "23-02-2022 01:05:02 UTC"
    }
    // const ale = await this.cemandenService.listAlerts()
    // const newAlerts = ale.alertas.reduce((prev, curr) => ({
    //   ...prev,
    //   codAlerta: curr.cod_alerta,
    //   codIbge: curr.codibge,
    //   event: curr.evento,
    //   level: curr.nivel,
    //   status: curr.status,
    //   createdAt: curr.datahoracriacao,
    //   updatedAt: curr.ult_atualizacao,
    // }))

    // return {
    //   alerts: alerts.alerts,
    //   upatedAt: "23-02-2022 01:05:02 UTC"
    // }

    return await Promise.resolve(alerts)
  }
}
