import { EditCreateTodoData } from './models/edit-create-todo-data';
import { ToDoItem } from '../../shared/models/to-do-item';
// Actions
export class AddToDoItem {
  static readonly type = '[Todos] Add item';
  constructor(public toDoItem: EditCreateTodoData) { }
}

export class EditToDoItem {
  static readonly type = '[Todos] Edit item';
  constructor(public toDoItem: ToDoItem, public changes: EditCreateTodoData) { }
}

export class RemoveToDoItem {
  static readonly type = '[Todos] Remove item';
  constructor(public id: number) { }
}

export class GetItems {
  static readonly type = '[Todos] Get todo items';
  constructor(public id?: number) {}
}

export class GetItemsByListId {
  static readonly type = '[Todos] Get items for list';
  constructor(public listId: number) {}
}

// Changes

export class ItemCreated {
  static readonly type = '[Todos] Item added';
  constructor(public payload: ToDoItem) { }
}

export class ItemsFetched {
  static readonly type = '[Todos] Items fetched';
  constructor(public items: ToDoItem[]) {}
}

export class SingleItemFetched {
  static readonly type = '[Todos] Single Item fetched';
  constructor(public item: ToDoItem) {}
}

export class ItemEdited {
  static readonly type = '[Todos] Item Edited';
  constructor(public item: ToDoItem) {}
}

export class ItemRemoved {
  static readonly type = '[Todos] Item Removed';
  constructor(public id: number) {}
}
