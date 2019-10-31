import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetUsers } from './users.actions';
import { Assignee } from '../models/assignee';

export class UsersStateModel {
  public items: Assignee[];
}

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
