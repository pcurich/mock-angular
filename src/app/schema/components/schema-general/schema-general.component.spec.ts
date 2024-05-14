import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaGeneralComponent } from './schema-general.component';

describe('SchemaGeneralComponent', () => {
  let component: SchemaGeneralComponent;
  let fixture: ComponentFixture<SchemaGeneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaGeneralComponent]
    });
    fixture = TestBed.createComponent(SchemaGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
