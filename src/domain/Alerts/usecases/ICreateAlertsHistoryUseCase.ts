export interface ICreateAlertsHistoryUseCase {
  handle(alert: ICreateAlertsHistoryUseCase.Params): Promise<void>
}

export namespace ICreateAlertsHistoryUseCase
{
  export type Params = {
    alertas: Alertas[],
    atualizado: string
  }
}

type Alertas = {
  cod_alerta: number,
  datahoracriacao: string,
  ult_atualizacao: string,
  codibge: number,
  evento: string,
  nivel: string,
  status: number
}