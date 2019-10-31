import { EditCreateListData } from './models/edit-create-list-data';
import { ToDoList } from '../models/to-do-list';

// Actions
export class CreateList {
  static readonly type = '[MultiList] Add list';
  constructor(public payload: EditCreateListData) { }
}

export class RemoveList {
  static readonly type = '[MultiList] Remove list';
  constructor(public id: number) { }
}

// export class AddTodoToList {
//   static readonly type = '[MultiList] Add Todo to list';
//   constructor(public toDoItem: ToDoItem) { }
// }


// Changes

export class ListCreated {
  static readonly type = '[MultiList] List created';
  constructor(public payload: ToDoList) { }
}
