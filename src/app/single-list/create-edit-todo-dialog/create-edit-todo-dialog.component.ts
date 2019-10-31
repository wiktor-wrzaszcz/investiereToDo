import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Assignee } from '../../models/assignee';

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
export class CreateEditTodoDialogComponent implements OnInit {
  form: FormGroup;
  dueDate: Date;
  description: string;
  assignee: Assignee;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateEditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TodoItemCreateEditDialogData) {
      this.dueDate = data.dueDate;
      this.description = data.description;
      this.assignee = data.assignee;
    }

  ngOnInit() {
    this.form = this.fb.group({
        dueDate: [this.dueDate, [Validators.required, Validators.minLength(3)]],
        description: [this.description, [Validators.required, Validators.minLength(3)]],
        assignee: [this.assignee, [Validators.required, Validators.minLength(3)]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }

  save(): void {
    console.log(this.form.valid);
    this.dialogRef.close(this.form.value);
  }
}
