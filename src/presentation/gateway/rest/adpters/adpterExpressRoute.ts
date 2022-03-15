
import { IControllerResponseModel } from '@application/interfaces/IControllerResponseModel';
import { ServerError } from '@commons/errors/ServerError';
import { Request, Response } from 'express'

type ControllerFunction = (request: any) => Promise<IControllerResponseModel<any>>;

export const adpterExpressRoute = async (controller: ControllerFunction, request: Request, response: Response,) =>
{
  try {
    const res = {
      ...request.body,
      ...request.params,
      ...request.query,
    }
    const controllerResponse = await controller(res)
    return response.status(200).json(controllerResponse)
  } catch (err: Error | any) {
    throw new ServerError(err.stack)
  }
}
