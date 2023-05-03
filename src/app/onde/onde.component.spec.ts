import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OndeComponent } from './onde.component';

describe('OndeComponent', () => {
  let component: OndeComponent;
  let fixture: ComponentFixture<OndeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OndeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OndeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
