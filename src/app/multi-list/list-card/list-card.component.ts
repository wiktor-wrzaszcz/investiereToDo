import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { RemoveList } from '../multi-list-store/multi-list.actions';
import { ToDoList } from '../../shared/models/to-do-list';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCardComponent implements OnInit {

  @Input()
  toDoList: ToDoList;

  constructor(private router: Router, private store: Store) { }

  ngOnInit() {
  }

  open() {
    this.router.navigate(['/toDoList/', this.toDoList.id]);
    console.log(this.toDoList);
  }
  edit() {}
  remove() {
    this.store.dispatch(new RemoveList(this.toDoList.id));
  }
}
