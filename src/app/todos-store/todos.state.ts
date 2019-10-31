import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddToDoItem, ItemCreated, GetItems, ItemsFetched, SingleItemFetched,
  GetItemsByListId, EditToDoItem, ItemEdited, RemoveToDoItem, ItemRemoved } from './todos.actions';
import { TodoService } from '../services/todo.service';
import { ToDoItem } from '../models/to-do-item';
import { EditCreateTodoData } from './models/edit-create-todo-data';

export class TodosStateModel {
  public items: ToDoItem[];
}

@State<TodosStateModel>({
  name: 'todos',
  defaults: {
    items: []
  }
})
export class TodosState {
  constructor(private readonly todoHttpSerivce: TodoService) {}

  @Selector()
  static getIndexedByList(state: TodosStateModel) {
    return (listIndex: number) => {
        return state.items.filter(x => x.ownerListId === listIndex);
    };
  }

  @Action(AddToDoItem)
  addToDoItem(ctx: StateContext<TodosStateModel>, action: AddToDoItem) {
    this.todoHttpSerivce.post(action.toDoItem).subscribe(x => ctx.dispatch(new ItemCreated(x)));
  }

  @Action(EditToDoItem)
  editToDoItem(ctx: StateContext<TodosStateModel>, action: EditToDoItem) {
    if (this.validateEdit(action.toDoItem, action.changes)) {
      this.todoHttpSerivce.put(
        {id: action.toDoItem.id, isResolved: action.toDoItem.isResolved, ownerListId: action.toDoItem.ownerListId, ...action.changes}
      ).subscribe(x => ctx.dispatch(new ItemEdited(x)));
    }
  }

  @Action(RemoveToDoItem)
  removeToDoItem(ctx: StateContext<TodosStateModel>, action: RemoveToDoItem) {
    this.todoHttpSerivce.delete(action.id).subscribe(x => ctx.dispatch(new ItemRemoved(x)));
  }

  @Action(GetItems)
  getItems(ctx: StateContext<TodosStateModel>, action: GetItems) {
    if (action.id) {
      this.todoHttpSerivce.getById(action.id).subscribe(x => ctx.dispatch(new SingleItemFetched(x)));
      return;
    }

    this.todoHttpSerivce.get().subscribe(x => ctx.dispatch(new ItemsFetched(x)));
  }

  @Action(GetItemsByListId)
  getItemsByListId(ctx: StateContext<TodosStateModel>, action: GetItemsByListId) {
    this.todoHttpSerivce.getByListId(action.listId).subscribe(x => ctx.dispatch(new ItemsFetched(x)));
  }

  // Changes

  @Action(ItemCreated)
  itemCreated(ctx: StateContext<TodosStateModel>, action: ItemCreated) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload] });
  }

  @Action(ItemsFetched)
  itemsFetched(ctx: StateContext<TodosStateModel>, action: ItemsFetched) {
    ctx.setState({ items:  [...action.items] });
  }

  @Action(SingleItemFetched)
  singleItemFetched(ctx: StateContext<TodosStateModel>, action: SingleItemFetched) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.item] });
  }

  @Action(ItemEdited)
  itemEdited(ctx: StateContext<TodosStateModel>, action: ItemEdited) {
    const state = ctx.getState();
    state.items[state.items.findIndex(x => x.id === action.item.id)] = action.item;
    ctx.setState({items: state.items});
  }

  @Action(ItemRemoved)
  itemRemoved(ctx: StateContext<TodosStateModel>, action: ItemRemoved) {
    const state = ctx.getState();
    state.items.splice(state.items.findIndex(x => x.id === action.id), 1);
    ctx.setState({items: state.items});
  }

  validateEdit(toDoItem: ToDoItem, changes: EditCreateTodoData) {
    return toDoItem.assignee !== changes.assignee
    || toDoItem.dueDate !== changes.dueDate
    || toDoItem.description !== changes.description
    || toDoItem.isResolved !== changes.isResolved;
  }
}
