import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateContainer } from './create-or-update.container';

describe('CreateOrUpdateContainer', () => {
  let component: CreateOrUpdateContainer;
  let fixture: ComponentFixture<CreateOrUpdateContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrUpdateContainer],
    });
    fixture = TestBed.createComponent(CreateOrUpdateContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
