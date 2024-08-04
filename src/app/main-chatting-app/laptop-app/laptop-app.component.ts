import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { InputQuestionComponent } from '../input-question/input-question.component';

@Component({
  selector: 'nevy11-laptop-app',
  templateUrl: './laptop-app.component.html',
  styleUrl: './laptop-app.component.scss',
})
export class LaptopAppComponent implements AfterViewInit {
  vcr = inject(ViewContainerRef);
  question: string =
    'How old was Kibaki when he became the first president of Kenya?';
  breakpointObserver = inject(BreakpointObserver);
  large$ = this.breakpointObserver.observe(Breakpoints.Large).pipe(
    map((result) => result.matches),
    shareReplay()
  );
  answer = `Kibaki became the president of the Kenya Republic in 2003. He was 40 years old having worked under the government of Moi. He was very strict in terms of the country's expenditure`;
  ngAfterViewInit(): void {
    this.vcr.createComponent(InputQuestionComponent);
  }
}
