import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { FormularModule } from './formular/formular.module';
import { ProgressComponent } from './progress/progress.component';
import { ComponentsModule } from 'projects/components/src/public_api';

@NgModule({
  declarations: [AppComponent, ProgressComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    DashboardModule,
    FormularModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
