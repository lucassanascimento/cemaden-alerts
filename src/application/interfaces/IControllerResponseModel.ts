export interface IControllerResponseModel<T = any> {
  statusCode: number,
  data?: T
}