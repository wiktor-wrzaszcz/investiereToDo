import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetUsers } from './users.actions';
import { Assignee } from '../shared/models/assignee';

export class UsersStateModel {
  public items: Assignee[];
}
// Users should actually be in mocked up backend and communicate with store through service,
// but there's no point in copy-paste at this stage (this solution is in other stores)
@State<UsersStateModel>({
  name: 'users',
  defaults: {
    items: [ {name: 'Mr Duck', pictureUrl: 'assets/duck.jpg'},
    {name: 'Mr Duck Disguised', pictureUrl: 'assets/squirrel.jpg'},
    {name: 'Mrs Squirrel', pictureUrl: 'assets/squirrel.jpg'}]
  }
})
export class UsersState {
  @Selector()
  static users(state: UsersStateModel) {
    return state.items;
  }

  @Action(GetUsers)
  add(ctx: StateContext<UsersStateModel>) {
    const state = ctx.getState();
    // fetch from backend here
    ctx.setState({ items: state.items });
  }
}
