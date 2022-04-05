import { AlertStatus } from "@domain/Alerts";
import { IAlertsRepository } from "@domain/Alerts/repositories/IAlertsRepository";
import { getAlertsMock } from "./mocks/alertsMock";

export class FakeAlertsRepository implements IAlertsRepository {
  add = async (data: Omit<AlertStatus, 'id'>) => {};
  list = async () => [getAlertsMock()];
}