import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaGeneralContainer } from './schema-general.container';

describe('SchemaGeneralComponent', () => {
  let component: SchemaGeneralContainer;
  let fixture: ComponentFixture<SchemaGeneralContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SchemaGeneralContainer],
    });
    fixture = TestBed.createComponent(SchemaGeneralContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
