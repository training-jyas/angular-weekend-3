import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  newServer: any;
  serverWasCreated(newServer: any) {
    console.log(newServer);
    this.newServer = newServer;
  }
}
