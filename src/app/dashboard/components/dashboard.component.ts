import { Component } from '@angular/core';

@Component({
  selector: 'ba-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  total: number = 254;
  constructor() {}
}
