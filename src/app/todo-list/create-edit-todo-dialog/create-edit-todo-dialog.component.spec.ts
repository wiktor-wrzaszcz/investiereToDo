import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTodoDialogComponent } from './create-edit-todo-dialog.component';

describe('CreateNewTodoDialogComponent', () => {
  let component: CreateEditTodoDialogComponent;
  let fixture: ComponentFixture<CreateEditTodoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditTodoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditTodoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
