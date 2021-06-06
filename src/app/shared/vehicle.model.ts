import { LogItem } from './log-item.model';

//interface for a vehicle
export interface Vehicle {
  make: string;
  model: string;
  year: string;
  purchasePrice: number;
  logEntries?: LogItem[];
}
