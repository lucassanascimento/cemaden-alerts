import { AlertStatus } from "@domain/Alerts";
import { IAlertsRepository } from "@domain/Alerts/repositories/IAlertsRepository";
import { getAlertHistoryMock } from "./mocks/alertHistoryMock";

export class FakeAlertsRepository implements IAlertsRepository {
  add = async (data: AlertStatus) => {};
  list = async () => [getAlertHistoryMock()];
}