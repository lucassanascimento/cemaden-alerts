import { Collection } from 'mongodb';

export interface IMongoService {
  disconnect(): Promise<void>
  getCollection(name: string): Collection
}