import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleListCardComponent } from './single-list-card.component';

describe('SingleListCardComponent', () => {
  let component: SingleListCardComponent;
  let fixture: ComponentFixture<SingleListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
