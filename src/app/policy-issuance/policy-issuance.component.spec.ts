import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyIssuanceComponent } from './policy-issuance.component';

describe('PolicyIssuanceComponent', () => {
  let component: PolicyIssuanceComponent;
  let fixture: ComponentFixture<PolicyIssuanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyIssuanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyIssuanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
