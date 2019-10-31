import { Injectable } from '@angular/core';
import { ToDoList } from '../models/to-do-list';
import { HttpService } from './http-service.interface';
import { Observable, of } from 'rxjs';
import { EditCreateListData } from '../../multi-list/multi-list-store/models/edit-create-list-data';
import { BackendMockUpService } from '../../backend-mock-up.service';

@Injectable({
  providedIn: 'root'
})
export class ListService implements HttpService<EditCreateListData> {

  constructor(public backendMockUpService: BackendMockUpService) { }
  // Here should happen real http calls
  public get(): Observable<ToDoList[]> {
    return of(this.backendMockUpService.listCollection.getValue());
  }

  public getById(id: number): Observable<ToDoList> {
    return of(this.backendMockUpService.listCollection.getValue().find(x => x.id === id));
  }

  public post(listData: EditCreateListData): Observable<ToDoList> {
    const currentState = this.backendMockUpService.listCollection.getValue();

    const items = [];
    Object.assign(items, currentState);
    const highestIndex = items.sort((x, y) => x.id - y.id).pop().id;
    const newList = {id: highestIndex + 1, name: listData.name, description: listData.description};
    this.backendMockUpService.listCollection.next([...currentState, newList]);
    return of(newList);
  }

  public put(listData: ToDoList): Observable<ToDoList>  {
    const currentState = this.backendMockUpService.listCollection.getValue();
    currentState[currentState.findIndex(x => x.id === listData.id)] = listData;

    this.backendMockUpService.listCollection.next(currentState);
    return of(listData);
  }

  public delete(id: number): Observable<number> {
    const currentState = this.backendMockUpService.listCollection.getValue();
    currentState.splice(currentState.findIndex(x => x.id === id), 1);

    this.backendMockUpService.listCollection.next([...currentState]);
    return of(id);
  }
}
