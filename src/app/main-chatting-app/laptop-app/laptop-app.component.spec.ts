import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopAppComponent } from './laptop-app.component';

describe('LaptopAppComponent', () => {
  let component: LaptopAppComponent;
  let fixture: ComponentFixture<LaptopAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
