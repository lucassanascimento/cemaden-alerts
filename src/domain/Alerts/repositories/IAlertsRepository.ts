import { AlertHistory, AlertStatus } from '@domain/Alerts';

export interface IAlertsRepository {
  add: (data: AlertStatus) => Promise<void>;
  list: () => Promise<AlertHistory[]>;
}
