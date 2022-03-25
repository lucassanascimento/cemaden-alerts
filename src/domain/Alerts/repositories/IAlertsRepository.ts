import { AlertsStatus } from '../Alerts';

export interface IAlertsRepository {
  add: (data: AlertsStatus) => Promise<void>;
}