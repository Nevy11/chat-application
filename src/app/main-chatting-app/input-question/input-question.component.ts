import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-input-question',
  templateUrl: './input-question.component.html',
  styleUrl: './input-question.component.scss',
})
export class InputQuestionComponent {
  question!: string;

  submit() {
    console.log('Data submitted successfully');
    console.log(this.question);
  }
}
