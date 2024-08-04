import { Component } from '@angular/core';

@Component({
  selector: 'nevy11-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  question: string =
    'How old was Kibaki when he became the first president of Kenya?';
}
