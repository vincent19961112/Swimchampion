import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwimIntroductionComponent } from './swim-introduction.component';

describe('SwimIntroductionComponent', () => {
  let component: SwimIntroductionComponent;
  let fixture: ComponentFixture<SwimIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
