import { AlertHistory, AlertStatus } from '@domain/Alerts';
import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';
import { IListAlertsUseCase } from '@domain/Alerts/usecases';
import { inject, injectable, singleton } from 'tsyringe'

@injectable()
export class ListAlertsUseCase implements IListAlertsUseCase {
  constructor(
    @inject('AlertsRepository')
    private altersRepository: IAlertsRepository
  ) { }

  async handle(): Promise<AlertHistory[]> {
    const alerts = await this.altersRepository.list()
    return alerts
  }
}
