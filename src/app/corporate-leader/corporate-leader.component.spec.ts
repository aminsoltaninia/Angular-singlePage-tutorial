import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateLeaderComponent } from './corporate-leader.component';

describe('CorporateLeaderComponent', () => {
  let component: CorporateLeaderComponent;
  let fixture: ComponentFixture<CorporateLeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporateLeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateLeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
