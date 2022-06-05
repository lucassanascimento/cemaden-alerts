export interface IIbgeService {
  getCountyByIbgeCode: (code: string) => Promise<any>
}