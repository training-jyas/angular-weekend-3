import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newServer: any;
  serverWasCreated(newServer: any) {
    console.log(newServer);
    this.newServer = newServer;
  }
}
