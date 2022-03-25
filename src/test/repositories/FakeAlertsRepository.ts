import { AlertsStatus } from "@domain/Alerts";
import { IAlertsRepository } from "@domain/Alerts/repositories/IAlertsRepository";

export class FakeAlertsRepository implements IAlertsRepository {
  add = async (data: AlertsStatus) => {};
}