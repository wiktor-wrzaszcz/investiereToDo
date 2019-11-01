import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store, Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { Assignee } from '../../shared/models/assignee';
import { UsersState } from '../../root-states/users-store/users.state';
import { takeUntil } from '../../../../node_modules/rxjs/operators';

export interface TodoItemCreateEditDialogData {
  description: string;
  dueDate: Date;
  assignee: Assignee;
}

@Component({
  selector: 'app-create-edit-todo-dialog',
  templateUrl: './create-edit-todo-dialog.component.html',
  styleUrls: ['./create-edit-todo-dialog.component.scss']
})
export class CreateEditTodoDialogComponent implements OnInit, OnDestroy {
  form: FormGroup;
  dueDate: Date;
  description: string;
  assignee: Assignee;

  unsubscribe$ = new Subject<boolean>();

  @Select(UsersState.users) users$: Observable<Assignee[]>;

  assignees: Assignee[] = [];

  constructor(
    public store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoItemCreateEditDialogData) {
      this.dueDate = data.dueDate;
      this.description = data.description;
      this.assignee = data.assignee;
    }

  getOptionText(option) {
    if (option) {
      return option.name;
    }
  }

  ngOnInit() {
    this.users$.pipe(takeUntil(this.unsubscribe$)).subscribe(x => this.assignees = x);
    this.form = this.fb.group({
        dueDate: [this.dueDate, [Validators.required, Validators.minLength(3)]],
        description: [this.description, [Validators.required, Validators.minLength(3)]],
        assignee: [this.assignee]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log(this.form.valid);
    this.dialogRef.close(this.form.value);
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
