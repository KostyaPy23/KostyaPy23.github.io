import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListCard } from './task-list-card.component';

describe('TaskComponent', () => {
  let component: TaskListCard;
  let fixture: ComponentFixture<TaskListCard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListCard ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
