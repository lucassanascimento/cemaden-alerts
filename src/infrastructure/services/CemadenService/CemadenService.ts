import { inject, injectable } from "tsyringe";
import { IHttpService } from "../HttpService/IHttpService";
import { ICemadenService } from "./ICemadenService";
import env from '@main/config/env'
import { logger } from "@commons/utils/logger";
import { ServerError } from "@commons/errors/ServerError";

@injectable()
export class CemadenService implements ICemadenService {
  constructor(
    @inject('HttpService')
    private httpService: IHttpService
  ) { }
  async listAlerts(): Promise<ICemadenService.Params> {
    try {
      const alerts = await this.httpService.get(env.app.cemaden.ALERTS_PANEL) as ICemadenService.Params
      return alerts
    } catch (error: any) {
      logger.info(error, 'Error to capture CEMADEN alerts data')
      throw new ServerError(error)
    }
  }
}