import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetItemLisModule } from '../budgetItemList/budgetItemList.module';
import { DashboardComponent } from './components/dashboard.component';

const routes = [{ path: '', component: DashboardComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), BudgetItemLisModule],
  declarations: [DashboardComponent],
  exports: [],
})
export class DashboardModule {}
