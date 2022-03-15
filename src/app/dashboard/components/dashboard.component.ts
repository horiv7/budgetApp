import { Component } from '@angular/core';
import { BudgetItemInterface } from 'src/app/shared/modules/types/BudgetItem.interface';
import { UpdateEventInterface } from 'src/app/shared/modules/types/UpdateEvent.interface';

@Component({
  selector: 'ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  budgetItems: BudgetItemInterface[] = new Array<BudgetItemInterface>();
  totalBudget: number = 0;
  initialValues: BudgetItemInterface = {
    description: '',
    amount: 0,
  };

  constructor() {}

  addItem(newItem: BudgetItemInterface) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItemInterface) {
    let index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateEvent: UpdateEventInterface) {
    // result is the update budget item
    // replace the item with the updated/submitted item from the form
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] =
      updateEvent.new;

    // update the total budget
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
