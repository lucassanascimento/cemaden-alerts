
export type AlertsStatus = {
  alerts: AlertsDetail[],
  upatedAt: string
}

type AlertsDetail = {
  codAlerta: number,
  codIbge: number,
  event: string,
  level: string,
  status: number
  createdAt: string,
  updatedAt: string,
}