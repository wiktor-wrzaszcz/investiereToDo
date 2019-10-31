import { Injectable } from '@angular/core';
import { ToDoList } from './models/to-do-list';
import { BehaviorSubject } from 'rxjs';
import { ToDoItem } from './models/to-do-item';

@Injectable({
  providedIn: 'root'
})
export class BackendMockUpService {
  public listCollection: BehaviorSubject<ToDoList[]> = new BehaviorSubject<ToDoList[]>(
    [
      {id: 0, name: 'test1', description: 'desc1', },
      {id: 1, name: 'test2', description: 'desc2'}
    ]);
  public itemCollection: BehaviorSubject<ToDoItem[]> = new BehaviorSubject<ToDoItem[]>(
    [
      {id: 0, ownerListId: 0, description: 'testDesc', assignee: null, dueDate: new Date(), isResolved: false },
      {id: 1, ownerListId: 0, description: 'testDesc2', assignee: null, dueDate: new Date(), isResolved: false },
      {id: 2, ownerListId: 1, description: 'testDesc', assignee: null, dueDate: new Date(), isResolved: false }
    ]);

  constructor() {

  }
}

// toDoItems: [
  // {description: "testDesc", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 0},
  // {description: "testDesc2", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 0}
// ]

// toDoItems: [
//   {description: "testDesc", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 1}
// ]
