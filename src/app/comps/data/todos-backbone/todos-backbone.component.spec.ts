import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosBackboneComponent } from './todos-backbone.component';

describe('TodosBackboneComponent', () => {
  let component: TodosBackboneComponent;
  let fixture: ComponentFixture<TodosBackboneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosBackboneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosBackboneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
