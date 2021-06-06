//interface for a repair/maintenance item

export interface LogItem {
  service: string;
  details: string;
  kms: number;
  cost: number;
  date: Date;
  serviceProvider: string;
}
