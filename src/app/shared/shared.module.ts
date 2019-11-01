import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssigneeComponent } from './components/assignee/assignee.component';
import { MaterialWrapperModule } from '../material-wrapper/material-wrapper.module';

@NgModule({
  declarations: [
    AssigneeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialWrapperModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialWrapperModule,
    AssigneeComponent
  ]
})
export class SharedModule { }
