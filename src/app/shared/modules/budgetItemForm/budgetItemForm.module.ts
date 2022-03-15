import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BudgetItemFormComponent } from './components/budgetItemForm.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatButtonModule],
  declarations: [BudgetItemFormComponent],
  exports: [BudgetItemFormComponent],
})
export class BudgetItemFormModule {}
