import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductListComponent } from './porduct-list.component';

describe('PorductListComponent', () => {
  let component: PorductListComponent;
  let fixture: ComponentFixture<PorductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
