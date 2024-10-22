import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbMaisComponent } from './sb-mais.component';

describe('SbMaisComponent', () => {
  let component: SbMaisComponent;
  let fixture: ComponentFixture<SbMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SbMaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SbMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
