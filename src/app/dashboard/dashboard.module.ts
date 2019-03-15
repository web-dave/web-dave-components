import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
// import { ComponentsModule } from 'web-dave-components';
import { ComponentsModule } from 'projects/components/src/public_api';
import { DashboardService } from './dashboard.service';
import { DashboardMockService } from './dashboard.mock.service';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ComponentsModule],
  providers: [{ provide: DashboardService, useClass: DashboardMockService }]
})
export class DashboardModule {}
