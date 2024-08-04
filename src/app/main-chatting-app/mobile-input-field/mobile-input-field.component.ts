import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-mobile-input-field',
  templateUrl: './mobile-input-field.component.html',
  styleUrl: './mobile-input-field.component.scss',
})
export class MobileInputFieldComponent {
  question: string = '';

  submit() {
    console.log('Data submitted successfully');
  }
}
