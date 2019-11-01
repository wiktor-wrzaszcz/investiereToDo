import { Component } from '@angular/core';
import { Store } from '../../node_modules/@ngxs/store';
import { GetLists } from './root-states/multi-list-store/multi-list.actions';
import { GetUsers } from './root-states/users-store/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvestiereToDo';
  constructor(public store: Store) {
    this.store.dispatch(new GetLists());
    this.store.dispatch(new GetUsers());
  }
}
