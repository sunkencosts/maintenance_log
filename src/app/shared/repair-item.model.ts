//interface for a repair/maintenance item

export interface RepairItem {
  what: string;
  details: string;
  kms: number;
  cost: number;
  date: Date;
  serviceProvider: string;
}
