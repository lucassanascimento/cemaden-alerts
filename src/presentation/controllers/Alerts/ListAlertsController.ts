import { IControllerResponseModel } from '@application/interfaces/IControllerResponseModel';
import { IListAlertsUseCase } from '@domain/Alerts/usecases';
import { inject, injectable } from 'tsyringe';
import { ok, serverError } from '../../interfaces';
import { IListAlertsController } from './interfaces/IListAlertsController';

@injectable()
export class ListAlertsController implements IListAlertsController
{
  constructor(
    @inject('ListAlertsUseCase')
    private listAlertsUseCase: IListAlertsUseCase
  )
  {}

  listAlerts = async (): Promise<IControllerResponseModel> =>
  {
    try {
      const alerts = await this.listAlertsUseCase.handle()
      return ok(alerts)
    } catch (error) {
      return serverError(error as Error)
    }
  }
}
