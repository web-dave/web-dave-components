import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PannelListComponent } from './pannel-list/pannel-list.component';
import { PannelComponent } from './pannel/pannel.component';
import { TableComponent } from './table/table.component';
import { CommentsComponent } from './comments/comments.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './list/list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { InputComponent } from './input/input.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavItemComponent } from './side-nav-item/side-nav-item.component';
import { ProgressCircleComponent } from './progress-circle/progress-circle.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    TopNavComponent,
    SideNavComponent,
    PageHeaderComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent,
    CommentsComponent,
    ProgressBarComponent,
    ContainerComponent,
    ListComponent,
    UserListItemComponent,
    PageFooterComponent,
    ContentTableComponent,
    InputComponent,
    SideNavItemComponent,
    ProgressCircleComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ComponentsComponent,
    TopNavComponent,
    SideNavComponent,
    PageHeaderComponent,
    PannelListComponent,
    PannelComponent,
    TableComponent,
    CommentsComponent,
    ProgressBarComponent,
    ContainerComponent,
    ListComponent,
    UserListItemComponent,
    PageFooterComponent,
    ContentTableComponent,
    InputComponent,
    SideNavItemComponent,
    ProgressCircleComponent
  ]
})
export class ComponentsModule {}
