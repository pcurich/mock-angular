import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaHeaderContainer } from './schema-header.container';

describe('SchemaHeaderComponent', () => {
  let component: SchemaHeaderContainer;
  let fixture: ComponentFixture<SchemaHeaderContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaHeaderContainer],
    });
    fixture = TestBed.createComponent(SchemaHeaderContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
