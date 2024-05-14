import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaHeaderComponent } from './schema-header.component';

describe('SchemaHeaderComponent', () => {
  let component: SchemaHeaderComponent;
  let fixture: ComponentFixture<SchemaHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaHeaderComponent]
    });
    fixture = TestBed.createComponent(SchemaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
