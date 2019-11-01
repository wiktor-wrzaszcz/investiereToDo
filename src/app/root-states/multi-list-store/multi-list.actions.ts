import { EditCreateListData } from './models/edit-create-list-data';
import { ToDoList } from '../../shared/models/to-do-list';

// Actions
export class CreateList {
  static readonly type = '[MultiList] Add list';
  constructor(public payload: EditCreateListData) { }
}

export class RemoveList {
  static readonly type = '[MultiList] Remove list';
  constructor(public id: number) { }
}

export class GetLists {
  static readonly type = '[MultiList] Get lists';
  constructor() { }
}

// Changes

export class ListCreated {
  static readonly type = '[MultiList] List created';
  constructor(public payload: ToDoList) { }
}

export class ListsFetched {
  static readonly type = '[MultiList] Lists fetched';
  constructor(public payload: ToDoList[]) { }
}
