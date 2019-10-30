import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material/dialog';
import { DialogData } from '../multi-list.component';
import { FormGroup, FormBuilder, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-create-new-list-dialog',
  templateUrl: './create-new-list-dialog.component.html',
  styleUrls: ['./create-new-list-dialog.component.scss']
})
export class CreateNewListDialogComponent implements OnInit {
  form: FormGroup;
  name: string;
  description: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateNewListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
      this.description = data.description;
      this.name = data.name;
    }

      
  ngOnInit() {
    this.form = this.fb.group({
        name: [this.name, [Validators.required, Validators.minLength(3)]],
        description: [this.description, [Validators.required, Validators.minLength(3)]]
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
