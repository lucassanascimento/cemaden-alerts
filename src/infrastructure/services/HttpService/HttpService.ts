import { IHttpService } from "./IHttpService";
import { ServerError } from '@commons/errors/ServerError'
import { AxiosInstance } from 'axios'

export class HttpService implements IHttpService
{
  constructor(
    private axios: AxiosInstance,
    private readonly timeOut: { timeout: 15000 }
  )
  { }

  async get(url: string)
  {
    try {
      const response = await this.axios.get(url, this.timeOut)
      return response.data || response.data.data
    } catch (error: any) {
      throw new ServerError(error.stack)
    }
  }
}