import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileInputFieldComponent } from './mobile-input-field.component';

describe('MobileInputFieldComponent', () => {
  let component: MobileInputFieldComponent;
  let fixture: ComponentFixture<MobileInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileInputFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
