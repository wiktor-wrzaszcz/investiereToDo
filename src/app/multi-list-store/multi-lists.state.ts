import { State, Action, StateContext } from '@ngxs/store';
import { CreateList } from './multi-lists.actions';
import { ToDoList } from '../models/to-do-list';

export class MultiListStateModel {
  public items: ToDoList[];
}
// assignee: new Assignee("Mrs Squirrel", "assets/squirrel.jpg"),

@State<MultiListStateModel>({
  name: 'multiLists',
  defaults: {
    items: [
      {id: 0, name: "test1", description: "desc1", dueDate: new Date(), isResolved: false},
      {id: 1, name: "test2", description: "desc2", dueDate: new Date(), isResolved: true}
    ]
  }
})
export class MultiListState {
  @Action(CreateList)
  add(ctx: StateContext<MultiListStateModel>, action: CreateList) {
    const state = ctx.getState();
    // Code below shouldn't exist - we should communicate with backend with gets and posts.
    const newList = {id: state.items.length, name: action.payload.name, description: action.payload.description, dueDate: action.payload.dueDate, isResolved: false};
    ctx.setState({ items: [ ...state.items, newList] });
  }
}
