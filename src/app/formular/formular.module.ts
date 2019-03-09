import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularComponent } from './formular.component';
import { ComponentsModule } from 'web-dave-components';

@NgModule({
  declarations: [FormularComponent],
  imports: [CommonModule, FormsModule, ComponentsModule]
})
export class FormularModule {}
