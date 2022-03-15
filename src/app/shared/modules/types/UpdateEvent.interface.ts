import { BudgetItemInterface } from './BudgetItem.interface';

export interface UpdateEventInterface {
  old: BudgetItemInterface;
  new: BudgetItemInterface;
}
