import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormularComponent } from './formular/formular.component';
import { ProgressComponent } from './progress/progress.component';
import { MylistComponent } from './mylist/mylist.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'formular',
    component: FormularComponent
  },
  {
    path: 'progress',
    component: ProgressComponent
  },
  {
    path: 'list',
    component: MylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
