import { IControllerResponseModel } from "@application/interfaces/IControllerResponseModel";
import { AlertsStatus } from "@domain/Alerts/Alerts";
import { HttpResponse } from "@presentation/interfaces";

export interface IListAlertsController
{
  listAlerts:() => Promise<IControllerResponseModel>
}


export type AlertsModel = AlertsStatus