import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaBodyComponent } from './schema-body.component';

describe('SchemaBodyComponent', () => {
  let component: SchemaBodyComponent;
  let fixture: ComponentFixture<SchemaBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaBodyComponent]
    });
    fixture = TestBed.createComponent(SchemaBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
