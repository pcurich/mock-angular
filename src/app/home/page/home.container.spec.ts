import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageContainer } from './home.container';

describe('HomePageContainer', () => {
  let component: HomePageContainer;
  let fixture: ComponentFixture<HomePageContainer>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageContainer],
    });
    fixture = TestBed.createComponent(HomePageContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
