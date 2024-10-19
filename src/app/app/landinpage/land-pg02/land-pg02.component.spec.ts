import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandPg02Component } from './land-pg02.component';

describe('LandPg02Component', () => {
  let component: LandPg02Component;
  let fixture: ComponentFixture<LandPg02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandPg02Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandPg02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
