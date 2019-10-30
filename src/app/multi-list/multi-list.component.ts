import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MultiListState } from '../multi-list-store/multi-lists.state';
import { ToDoList } from '../models/to-do-list';
import { CreateList } from '../multi-list-store/multi-lists.actions';

@Component({
  selector: 'app-multi-list',
  templateUrl: './multi-list.component.html',
  styleUrls: ['./multi-list.component.scss']
})
export class MultiListComponent implements OnInit {
  
  @Select(MultiListState) multiListState$: Observable<ToDoList[]>;
  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  createNewList() {
    this.store.dispatch(new CreateList(
      {name: "test2", description: "desc2", dueDate: new Date()}
    ))
  }
}
