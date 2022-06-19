import { AlertsDetail } from "@domain/Alerts";

export interface INotifyUser {
  handle:(data: AlertsDetail[]) => Promise<void>
}