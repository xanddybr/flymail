import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPg01Component } from './land-pg01.component';

describe('LandPg01Component', () => {
  let component: LandPg01Component;
  let fixture: ComponentFixture<LandPg01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandPg01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandPg01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
