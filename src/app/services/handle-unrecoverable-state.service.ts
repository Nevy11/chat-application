import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class HandleUnrecoverableStateService {
  constructor(updates: SwUpdate) {
    updates.unrecoverable.subscribe((event) => {
      alert(
        `An error occured that we cannot recover from: ${event.reason} \n\n Please reload the page`
      );
    });
  }
}
