import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContainer } from './page.container';

describe('PageContainer', () => {
  let component: PageContainer;
  let fixture: ComponentFixture<PageContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContainer],
    });
    fixture = TestBed.createComponent(PageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
