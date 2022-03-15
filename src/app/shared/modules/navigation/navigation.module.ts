import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
})
export class NavigationModule {}
