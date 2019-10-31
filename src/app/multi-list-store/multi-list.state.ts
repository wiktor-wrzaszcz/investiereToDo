import { State, Action, StateContext, Selector } from '@ngxs/store';
import { CreateList, RemoveList, ListCreated } from './multi-list.actions';
import { ToDoList } from '../models/to-do-list';
import { ListService } from '../services/list.service';

export class MultiListStateModel {
  public items: ToDoList[];
}

@State<MultiListStateModel>({
  name: 'multiList',
  defaults: {
    items: [
      {id: 0, name: "test1", description: "desc1", 
      // toDoItems: [
      //   {description: "testDesc", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 0},
      //   {description: "testDesc2", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 0}
      // ]
    },
      {id: 1, name: "test2", description: "desc2", 
      // toDoItems: [
      //   {description: "testDesc", assignee: null, dueDate: new Date(), isResolved: false, ownerListId: 1}
      // ]
    }
    ]
  }
})
export class MultiListState {
  constructor(private readonly listHttpService: ListService){}

  @Selector() 
  static getIndexed(state: MultiListStateModel) {
    return (index: number) => { 
        return state.items.find(x=>x.id === index);
    };
  }

  @Action(CreateList)
  createList(ctx: StateContext<MultiListStateModel>, action: CreateList) {
    // const state = ctx.getState();
    // // Code below is not proper - we should try to rely on data from backend.
    // const items = [];
    // Object.assign(items, state.items);
    // const highestIndex = items.sort((x,y) => x.id - y.id).pop().id;    
    // const newList = {id: highestIndex + 1, name: action.payload.name, description: action.payload.description, toDoItems: []};

    this.listHttpService.post(action.payload).subscribe(x=> ctx.dispatch(new ListCreated(x)));
    // ctx.setState({ items: [ ...state.items, newList] });
  }

  @Action(RemoveList)
  removeList(ctx: StateContext<MultiListStateModel>, action: RemoveList) {
    const state = ctx.getState();
    // Here should be Delete call     
    state.items.splice(state.items.findIndex(x=>x.id === action.id),1);
  }

  // @Action(AddTodoToList)
  // updateListTodos(ctx: StateContext<MultiListStateModel>, action: AddTodoToList) {
  //   const state = ctx.getState();
  //   // Here should be separate call for updating items based on list ID.
  //   const list = state.items.find(x=>x.id === action.toDoItem.ownerListId);
  //   list.toDoItems.push(action.toDoItem);
  // }


  // Changes

  @Action(ListCreated)
  listCreated(ctx: StateContext<MultiListStateModel>, action: ListCreated) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload] });
  }
}
