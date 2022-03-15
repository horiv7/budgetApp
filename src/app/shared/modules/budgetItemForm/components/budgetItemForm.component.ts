import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { BudgetItemInterface } from '../../types/BudgetItem.interface';

@Component({
  selector: 'ba-budget-item-form',
  templateUrl: './budgetItemForm.component.html',
  styleUrls: ['./budgetItemForm.component.scss'],
})
export class BudgetItemFormComponent implements OnInit {
  @Input('initialValues')
  initialValuesProps!: BudgetItemInterface;
  @Output() formSubmit = new EventEmitter<BudgetItemInterface>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    
  }

  initializeForm(): void {
    this.form = this.fb.group({
      description: this.initialValuesProps.description,
      amount: this.initialValuesProps.amount,
    });
  }

  onSubmit() {
    console.table(this.form.value);
    this.formSubmit.emit(this.form.value);
    this.form.reset();
  }
}
