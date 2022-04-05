import { AlertStatus } from "../AlertStatus";

export interface IListAlertsUseCase {
  handle(): Promise<AlertStatus[]>
}