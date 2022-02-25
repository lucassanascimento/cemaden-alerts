export interface IAxiosAdapter
{
  get<T = any>(url: string): Promise<T>
}