import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContainer } from './list.container';

describe('ListContainer', () => {
  let component: ListContainer;
  let fixture: ComponentFixture<ListContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListContainer],
    });
    fixture = TestBed.createComponent(ListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
