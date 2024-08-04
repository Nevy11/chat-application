import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneApplicationComponent } from './phone-application.component';

describe('PhoneApplicationComponent', () => {
  let component: PhoneApplicationComponent;
  let fixture: ComponentFixture<PhoneApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneApplicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhoneApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
