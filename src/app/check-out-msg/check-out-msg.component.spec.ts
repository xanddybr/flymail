import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutMsgComponent } from './check-out-msg.component';

describe('CheckOutMsgComponent', () => {
  let component: CheckOutMsgComponent;
  let fixture: ComponentFixture<CheckOutMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckOutMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckOutMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
