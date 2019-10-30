import { Component, OnInit, Input } from '@angular/core';
import { Assignee } from '../models/assignee';

@Component({
  selector: 'app-assignee',
  templateUrl: './assignee.component.html',
  styleUrls: ['./assignee.component.scss']
})
export class AssigneeComponent implements OnInit {
  @Input()
  assignee: Assignee;

  constructor() { }

  ngOnInit() {
  }

}
