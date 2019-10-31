import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../../models/to-do-item';
import { MatDialog } from '@angular/material';
import { CreateEditTodoDialogComponent, TodoItemCreateEditDialogData } from '../create-edit-todo-dialog/create-edit-todo-dialog.component';
import { EditToDoItem } from '../../todos-store/todos.actions';
import { Store } from '../../../../node_modules/@ngxs/store';
import { EditCreateTodoData } from '../../todos-store/models/edit-create-todo-data';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  @Input()
  toDoItem: ToDoItem;

  constructor(public dialog: MatDialog, public store: Store) { }

  ngOnInit() {
  }

  edit() {
    const dialogRef = this.dialog.open(CreateEditTodoDialogComponent, {
      width: '250px',
      data: {
        dueDate: this.toDoItem.dueDate, description: this.toDoItem.description, assignee: this.toDoItem.assignee
      }
    });

    dialogRef.afterClosed().subscribe((result: TodoItemCreateEditDialogData) => {
      if(result) {
        this.store.dispatch(new EditToDoItem(this.toDoItem, result as EditCreateTodoData))
      }
    });
  }
  remove() {
    // this.store.dispatch(new RemoveList(this.toDoList.id));
  }
}
