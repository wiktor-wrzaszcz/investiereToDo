import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ToDoList } from '../../models/to-do-list';

@Component({
  selector: 'app-single-list-card',
  templateUrl: './single-list-card.component.html',
  styleUrls: ['./single-list-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleListCardComponent implements OnInit {

  @Input()
  toDoList: ToDoList;

  constructor() { }

  ngOnInit() {
  }
}
