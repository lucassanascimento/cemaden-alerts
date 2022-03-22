import { IAlertsRepository } from '@domain/Alerts/repositories/IAlertsRepository';

export class AltersRepository implements IAlertsRepository {
  async add(): Promise<void> {
    1 + 1;
  }
}