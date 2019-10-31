import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CreateList, RemoveList, ListCreated, GetLists, ListsFetched } from './multi-list.actions';
import { ToDoList } from '../models/to-do-list';
import { ListService } from '../services/list.service';

export class MultiListStateModel {
  public items: ToDoList[];
}

@State<MultiListStateModel>({
  name: 'multiList',
  defaults: {
    items: []
  }
})
export class MultiListState {
  constructor(private readonly listHttpService: ListService) {}

  @Selector()
  static getIndexed(state: MultiListStateModel) {
    return (index: number) => {
        return state.items.find(x => x.id === index);
    };
  }

  @Action(CreateList)
  createList(ctx: StateContext<MultiListStateModel>, action: CreateList) {
    this.listHttpService.post(action.payload).subscribe(x => ctx.dispatch(new ListCreated(x)));
  }

  @Action(RemoveList)
  removeList(ctx: StateContext<MultiListStateModel>, action: RemoveList) {
    const state = ctx.getState();
    // Here should be Delete call
    state.items.splice(state.items.findIndex(x => x.id === action.id), 1);
  }

  @Action(GetLists)
  getLists(ctx: StateContext<MultiListStateModel>) {
    this.listHttpService.get().subscribe(x => ctx.dispatch(new ListsFetched(x)));
  }

  // Changes

  @Action(ListCreated)
  listCreated(ctx: StateContext<MultiListStateModel>, action: ListCreated) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload] });
  }

  @Action(ListsFetched)
  listsFetched(ctx: StateContext<MultiListStateModel>, action: ListsFetched) {
    ctx.setState({ items: action.payload });
  }
}
