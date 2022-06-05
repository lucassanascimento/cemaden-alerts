import { inject, injectable } from "tsyringe";
import { IHttpService } from "../HttpService/IHttpService";
import { IIbgeService } from "./IIbgeService";
import env from '@main/config/env'

@injectable()
export class IbgeService implements IIbgeService {
  constructor(
    @inject('HttpService')
    private httpService: IHttpService
  ) { }

  async getCountyByIbgeCode(code: string): Promise<any> {
    const county = await this.httpService.get(`${env.ibge.localidades}/municipios/${code}`);
    return county;
  }
}