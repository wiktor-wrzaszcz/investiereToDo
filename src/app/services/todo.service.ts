import { Injectable } from '@angular/core';
import { ToDoItem } from '../models/to-do-item';
import { HttpService } from './http-service.interface';
import { BackendMockUpService } from '../backend-mock-up.service';
import { of, Observable } from 'rxjs';
import { EditCreateTodoData } from '../todos-store/models/edit-create-todo-data';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements HttpService<ToDoItem> {

  constructor(public backendMockUpService: BackendMockUpService) { }

  public get(): Observable<ToDoItem[]> {
    return of(this.backendMockUpService.itemCollection.getValue());
  }

  public getById(id: number): Observable<ToDoItem> {
    return of(this.backendMockUpService.itemCollection.getValue().find(x => x.id === id));
  }

  public getByListId(listId: number): Observable<ToDoItem[]> {
    return of(this.backendMockUpService.itemCollection.getValue().filter(x => x.ownerListId === listId));
  }

  public post(listData: EditCreateTodoData): Observable<ToDoItem> {
    const currentState = this.backendMockUpService.itemCollection.getValue();

    const items = [];
    Object.assign(items, currentState);
    const highestIndex = items.sort((x, y) => x.id - y.id).pop().id;
    const newItem = {id: highestIndex + 1, isResolved: false, ...listData};
    this.backendMockUpService.itemCollection.next([...currentState, newItem]);
    return of(newItem);
  }

  public put(item: ToDoItem) {
    const currentState = this.backendMockUpService.itemCollection.getValue();
    currentState[currentState.findIndex(x => x.id === item.id)] = item;
    this.backendMockUpService.itemCollection.next(currentState);
    return of(item);
  }

  // TODO: fill
  public delete(id: number) {
    const x = id;
    return of(x);
  }
}
