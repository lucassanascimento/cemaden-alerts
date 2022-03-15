import { Controller } from '@presentation/interfaces'

export const adaptResolver = async (controller: Controller): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
