import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { AlertStatus } from "@domain/Alerts/AlertStatus";

export interface IListAlertsController {
  listAlerts: () => Promise<IControllerResponseModel>
}


export type AlertsModel = AlertStatus