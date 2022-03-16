import { IHttpService } from "./IHttpService";
import { ServerError } from '@commons/errors/ServerError'
import axios from 'axios'

export class HttpService implements IHttpService {
  async get(url: string) {
    try {
      const response = await axios.get(url, { timeout: 1500 })
      return response.data || response.data.data
    } catch (error: any) {
      throw new ServerError(error.stack)
    }
  }
}