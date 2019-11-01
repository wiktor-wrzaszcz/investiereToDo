import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateNewListDialogComponent } from './create-new-list-dialog/create-new-list-dialog.component';
import { ToDoList } from '../shared/models/to-do-list';
import { MultiListState } from '../root-states/multi-list-store/multi-list.state';
import { CreateList } from '../root-states/multi-list-store/multi-list.actions';

export interface MultiListCreateDialogData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-multi-list',
  templateUrl: './multi-list.component.html',
  styleUrls: ['./multi-list.component.scss']
})
export class MultiListComponent {

  @Select(MultiListState) multiListState$: Observable<ToDoList[]>;

  constructor(private store: Store, public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateNewListDialogComponent, {
      width: '250px',
      data: {name: null, description: null}
    });

    dialogRef.afterClosed().subscribe((result: MultiListCreateDialogData) => {
    if (result) {
      this.store.dispatch(new CreateList(
        {name: result.name, description: result.description}
      )); }
    });
  }
}

