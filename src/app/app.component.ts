import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Monia Application!!! from my  first branch';
  test = "test 123";
  changesFromLocal = "some other changes";
  changesFromOrigin = "some changes";
  message = "New message";
}
