import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { map, debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { CreateEditTodoDialogComponent, TodoItemCreateEditDialogData } from './create-edit-todo-dialog/create-edit-todo-dialog.component';
import { GetItemsByListId, AddToDoItem, EditToDoItem } from './todos-store/todos.actions';
import { TodosState } from './todos-store/todos.state';
import { ToDoList } from '../shared/models/to-do-list';
import { ToDoItem } from '../shared/models/to-do-item';
import { MultiListState } from '../root-states/multi-list-store/multi-list.state';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '../../../node_modules/@angular/cdk/drag-drop';
import { EditCreateTodoData } from './todos-store/models/edit-create-todo-data';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private store: Store, public dialog: MatDialog) { }

  public list: ToDoList;
  public todos: ToDoItem[];

  todo: ToDoItem[];

  done: ToDoItem[];

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.store.select(MultiListState.getIndexed).pipe(
      map(filterFn => filterFn(id)),
      debounceTime(1000) // fancy spinner presentation
    ).subscribe(x => this.list = x);

    this.store.dispatch(new GetItemsByListId(id));

    this.store.select(TodosState.getIndexedByList).pipe(
      map(filterFn => filterFn(id))
    ).subscribe(x => {this.todos = x; this.done = x.filter(x => x.isResolved); this.todo = x.filter( x => !x.isResolved); });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateEditTodoDialogComponent, {
      width: '250px',
      data: {dueDate: null, description: null, assignee: null}
    });

    dialogRef.afterClosed().subscribe((result: TodoItemCreateEditDialogData) => {
      if (result) {
        this.store.dispatch(new AddToDoItem({...result, ownerListId: this.list.id, isResolved: false}));
      }
    });
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      // this chunk could be prettier/cleaner, but wanted to reuse existing structure
      const toDoItemWithChangedValue: any = {};
      Object.assign(toDoItemWithChangedValue, event.container.data[event.currentIndex]);
      toDoItemWithChangedValue.isResolved = !toDoItemWithChangedValue.isResolved;
      this.store.dispatch(new EditToDoItem(event.container.data[event.currentIndex], toDoItemWithChangedValue as EditCreateTodoData));
    }
  }
}
