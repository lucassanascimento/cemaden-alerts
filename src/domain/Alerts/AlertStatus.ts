
export type AlertStatus = {
  alerts: AlertsDetail[],
  updatedAt: string
}

export type AlertsDetail = {
  alertCode: number,
  ibgeCode: number,
  event: string,
  level: string,
  status: number,
  county: string,
  uf: string,
  createdAt: string,
  updatedAt: string,
}