import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateEditTodoDialogComponent, TodoItemCreateEditDialogData } from '../create-edit-todo-dialog/create-edit-todo-dialog.component';
import { Store } from '@ngxs/store';
import { EditCreateTodoData } from '../todos-store/models/edit-create-todo-data';
import { EditToDoItem, RemoveToDoItem } from '../todos-store/todos.actions';
import { ToDoItem } from '../../shared/models/to-do-item';

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
      if (result) {
        this.store.dispatch(new EditToDoItem(this.toDoItem, result as EditCreateTodoData));
      }
    });
  }

  remove() {
    this.store.dispatch(new RemoveToDoItem(this.toDoItem.id));
  }
}
