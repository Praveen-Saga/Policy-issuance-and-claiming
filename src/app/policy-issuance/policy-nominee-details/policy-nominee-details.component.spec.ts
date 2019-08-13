import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyNomineeDetailsComponent } from './policy-nominee-details.component';

describe('PolicyNomineeDetailsComponent', () => {
  let component: PolicyNomineeDetailsComponent;
  let fixture: ComponentFixture<PolicyNomineeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyNomineeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyNomineeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
