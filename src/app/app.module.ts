import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiListComponent } from './multi-list/multi-list.component';
import { MaterialWrapperModule } from './material-wrapper/material-wrapper.module';
import { NgxsModule } from '@ngxs/store';
import { CreateNewListDialogComponent } from './multi-list/create-new-list-dialog/create-new-list-dialog.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ListCardComponent } from './multi-list/list-card/list-card.component';
import { CreateEditTodoDialogComponent } from './todo-list/create-edit-todo-dialog/create-edit-todo-dialog.component';
import { TodoCardComponent } from './todo-list/todo-card/todo-card.component';
import { UsersState } from './users-store/users.state';
import { TodosState } from './todo-list/todos-store/todos.state';
import { MultiListState } from './multi-list/multi-list-store/multi-list.state';
import { AssigneeComponent } from './shared/components/assignee/assignee.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiListComponent,
    ListCardComponent,
    AssigneeComponent,
    CreateNewListDialogComponent,
    TodoListComponent,
    CreateEditTodoDialogComponent,
    TodoCardComponent
  ],
  imports: [
    NgxsModule.forRoot([
      MultiListState,
      TodosState,
      UsersState
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialWrapperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateNewListDialogComponent, CreateEditTodoDialogComponent]
})
export class AppModule { }
