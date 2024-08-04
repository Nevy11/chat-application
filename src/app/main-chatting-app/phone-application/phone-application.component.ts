import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MobileInputFieldComponent } from '../mobile-input-field/mobile-input-field.component';

@Component({
  selector: 'nevy11-phone-application',
  templateUrl: './phone-application.component.html',
  styleUrl: './phone-application.component.scss',
})
export class PhoneApplicationComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  ngAfterViewInit(): void {
    this.vcr.createComponent(MobileInputFieldComponent);
  }
}
