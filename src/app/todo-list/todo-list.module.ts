import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { TodoListComponent } from './todo-list.component';
import { TodosState } from './todos-store/todos.state';
import { TodoListRoutingModule } from './todo-list-routing.module';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { CreateEditTodoDialogComponent } from './create-edit-todo-dialog/create-edit-todo-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { AssigneeComponent } from '../shared/components/assignee/assignee.component';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoCardComponent,
    CreateEditTodoDialogComponent
  ],
  imports: [
    SharedModule,
    TodoListRoutingModule,
    NgxsModule.forFeature([
      TodosState,
    ])
  ],
  entryComponents: [CreateEditTodoDialogComponent, AssigneeComponent]
})
export class TodoListModule { }
