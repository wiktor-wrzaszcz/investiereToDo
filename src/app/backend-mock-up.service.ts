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
      {id: 0, name: 'List number Uno', description: 'Description of list number Uno', },
      {id: 1, name: 'List number Secundo', description: 'Description of list number Secundo'}
    ]);
  public itemCollection: BehaviorSubject<ToDoItem[]> = new BehaviorSubject<ToDoItem[]>(
    [
      {id: 0, ownerListId: 0, description: 'Clean lake out of bread',
      assignee: {name: 'Mr Duck', pictureUrl: 'assets/duck.jpg'}, dueDate: new Date(), isResolved: false },
      {id: 1, ownerListId: 0, description: 'Impersonate duckling',
      assignee: {name: 'Mr Duck Disguised', pictureUrl: 'assets/squirrel.jpg'}, dueDate: new Date(), isResolved: false },
      {id: 2, ownerListId: 1, description: 'Go nuts',
      assignee: {name: 'Mrs Squirrel', pictureUrl: 'assets/squirrel.jpg'}, dueDate: new Date(), isResolved: false }
    ]);

    // Users should actually be here and communicate with store through service, but there's no point in copy-paste at this stage
}
