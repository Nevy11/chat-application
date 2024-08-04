import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChattingAppComponent } from './main-chatting-app.component';

describe('MainChattingAppComponent', () => {
  let component: MainChattingAppComponent;
  let fixture: ComponentFixture<MainChattingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainChattingAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChattingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
