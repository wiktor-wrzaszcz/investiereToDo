import { Component } from '@angular/core';
import { Store } from '../../node_modules/@ngxs/store';
import { GetLists } from './multi-list-store/multi-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InvestiereToDo';
  constructor(public store: Store) {

    this.store.dispatch(new GetLists());
  }
}
