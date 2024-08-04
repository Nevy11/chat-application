import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationsExampleService {
  constructor(swPush: SwPush) {
    swPush.notificationClicks.subscribe((evt) => {
      console.log(evt);
    });
  }
}
