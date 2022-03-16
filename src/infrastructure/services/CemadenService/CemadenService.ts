import { inject, injectable } from "tsyringe";
import { IHttpService } from "../HttpService/IHttpService";
import { ICemadenService } from "./ICemadenService";
import env from '@main/config/env'

@injectable()
export class CemandeService implements ICemadenService
{
  constructor(
    @inject('HttpService')
    private httpService: IHttpService
  ) { }
  async listAlerts(): Promise<ICemadenService.Params>
  {
    try {
      const alerts = await this.httpService.get(env.cemaden.ALERTS_PANEL) as ICemadenService.Params
      return alerts
    } catch (error) {
      throw new Error()
    }
  }
}