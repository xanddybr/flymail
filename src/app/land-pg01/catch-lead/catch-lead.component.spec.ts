import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchLeadComponent } from './catch-lead.component';

describe('CatchLeadComponent', () => {
  let component: CatchLeadComponent;
  let fixture: ComponentFixture<CatchLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchLeadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatchLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
