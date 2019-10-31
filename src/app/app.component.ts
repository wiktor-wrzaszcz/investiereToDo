import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetLists } from './multi-list/multi-list-store/multi-list.actions';

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
