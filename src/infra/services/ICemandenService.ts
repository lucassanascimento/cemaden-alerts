export interface ICemadenService {
 listAlerts: () => Promise<ICemadenService.Params>
}

export namespace ICemadenService
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