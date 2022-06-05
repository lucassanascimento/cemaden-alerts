import { County } from '../County';

export interface ICountyRepository {
  add: (data: County) => Promise<void>
  get: (code: string) => Promise<County>
}