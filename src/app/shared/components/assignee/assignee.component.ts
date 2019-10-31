import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Assignee } from '../../models/assignee';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssigneeComponent implements OnInit {
  @Input()
  assignee: Assignee;

  constructor() { }

  ngOnInit() {
  }

}
