import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { BudgetItemListComponent } from './components/budgetItemList.component';

@NgModule({
  imports: [CommonModule, MatListModule],
  declarations: [BudgetItemListComponent],
  exports: [BudgetItemListComponent],
})
export class BudgetItemLisModule {}
