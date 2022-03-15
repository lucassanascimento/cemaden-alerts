import { AlertsStatus } from "../Alerts";

export interface IListAlertsUseCase {
  handle(): Promise<AlertsStatus>
}