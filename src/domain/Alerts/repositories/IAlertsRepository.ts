export interface IAlertsRepository {
  add: (data: any) => Promise<void>;
}