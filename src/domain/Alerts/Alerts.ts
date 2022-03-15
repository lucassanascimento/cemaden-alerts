
export type AlertsStatus = {
  alerts: AlertsDetail[],
  updatedAt: string
}

type AlertsDetail = {
  alertCode: number,
  ibgeCode: number,
  event: string,
  level: string,
  status: number
  createdAt: string,
  updatedAt: string,
}