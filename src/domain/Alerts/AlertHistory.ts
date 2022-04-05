
export type AlertHistory = {
  id: string,
  alerts: AlertsHistoryDetail[],
  updatedAt: string
}

type AlertsHistoryDetail = {
  alertCode: number,
  ibgeCode: number,
  event: string,
  level: string,
  status: number
  createdAt: string,
  updatedAt: string,
}