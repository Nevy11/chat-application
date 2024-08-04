import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'nevy11-chat-nav',
  templateUrl: './chat-nav.component.html',
  styleUrl: './chat-nav.component.scss',
})
export class ChatNavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  date = new Date();

  year = this.date.getFullYear();
  month = this.date.getMonth();
  dateOfMonth = this.date.getDate();
}
