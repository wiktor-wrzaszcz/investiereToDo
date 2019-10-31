import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { MultiListState } from '../multi-list-store/multi-list.state';
import { map, debounceTime } from 'rxjs/operators';
import { ToDoList } from '../models/to-do-list';
import { MatDialog } from '@angular/material';
import { CreateEditTodoDialogComponent, TodoItemCreateEditDialogData } from './create-edit-todo-dialog/create-edit-todo-dialog.component';
import { AddToDoItem, GetItemsByListId } from '../todos-store/todos.actions';
import { TodosState } from '../todos-store/todos.state';
import { ToDoItem } from '../models/to-do-item';
@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.scss']
})
export class SingleListComponent implements OnInit {

  public list: ToDoList;
  public todos: ToDoItem[];

  constructor(private route: ActivatedRoute, private store: Store, public dialog: MatDialog) { }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.select(MultiListState.getIndexed).pipe(
      map(filterFn => filterFn(id)),
      debounceTime(1000) // fancy spinner presentation
    ).subscribe(x => this.list = x);

    this.store.dispatch(new GetItemsByListId(id));

    this.store.select(TodosState.getIndexedByList).pipe(
      map(filterFn => filterFn(id))
    ).subscribe(x => {this.todos = x; });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateEditTodoDialogComponent, {
      width: '250px',
      data: {dueDate: null, description: null, assignee: null}
    });

    dialogRef.afterClosed().subscribe((result: TodoItemCreateEditDialogData) => {
      if (result) {
        this.store.dispatch(new AddToDoItem({...result, ownerListId: this.list.id}));
      }
    });
  }

}
