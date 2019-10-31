import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToDoList } from './shared/models/to-do-list';
import { ToDoItem } from './shared/models/to-do-item';

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
      {id: 0, ownerListId: 0, description: 'testDesc',
      assignee: {name: 'Mr Duck', pictureUrl: 'assets/duck.jpg'}, dueDate: new Date(), isResolved: false },
      {id: 1, ownerListId: 0, description: 'testDesc2',
      assignee: {name: 'Mr Duck Disguised', pictureUrl: 'assets/squirrel.jpg'}, dueDate: new Date(), isResolved: false },
      {id: 2, ownerListId: 1, description: 'testDesc',
      assignee: {name: 'Mrs Squirrel', pictureUrl: 'assets/squirrel.jpg'}, dueDate: new Date(), isResolved: false }
    ]);

    // Users should actually be here and communicate with store through service, but there's no point in copy-paste at this stage
}
