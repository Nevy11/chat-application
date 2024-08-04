import {
  AfterViewInit,
  Component,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MainChattingAppComponent } from './main-chatting-app/main-chatting-app.component';

@Component({
  selector: 'nevy11-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'chat-app';
  vcr = inject(ViewContainerRef);

  ngAfterViewInit(): void {
    this.vcr.createComponent(MainChattingAppComponent);
  }
}
