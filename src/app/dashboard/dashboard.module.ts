import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'web-dave-components';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ComponentsModule]
})
export class DashboardModule {}
