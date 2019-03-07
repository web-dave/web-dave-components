import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentsModule } from 'projects/components/src/public_api';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ComponentsModule]
})
export class DashboardModule {}
