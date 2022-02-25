import { ICemadenService } from "./ICemandenService";

export class CemandenService implements ICemadenService
{
  async listAlerts(): Promise<ICemadenService.Params>
  {
    const alerts = {
      alertas: [
        {
          cod_alerta: 721,
          datahoracriacao: "05-02-2022 05:23:03",
          ult_atualizacao: "05-02-2022 05:23:03",
          codibge: 3154606,
          evento: "Movimentos de Massa - Moderado",
          nivel: "Moderado",
          status: 1
        }
      ],
      atualizado: "23-02-2022 01:05:02 UTC"
    }
    return await Promise.resolve(alerts)
  }
}