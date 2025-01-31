import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefVideoComponent } from './brief-video.component';

describe('BriefVideoComponent', () => {
  let component: BriefVideoComponent;
  let fixture: ComponentFixture<BriefVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BriefVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
