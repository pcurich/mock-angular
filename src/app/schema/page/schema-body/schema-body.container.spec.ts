import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaBodyContainer } from './schema-body.container';

describe('SchemaBodyComponent', () => {
  let component: SchemaBodyContainer;
  let fixture: ComponentFixture<SchemaBodyContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaBodyContainer],
    });
    fixture = TestBed.createComponent(SchemaBodyContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
