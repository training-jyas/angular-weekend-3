import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header1 = 'Create Serverr';
  header2 = 'List';
  isButtonDisabled = false;
  serverNamePlaceholder = 'Please enter a server name';
  serverStatusPlaceholder = 'Please enter a server status';
  serverName = 'Server 1';
  serverStatus = 'offline';
  servers: Array<any> = [{
    name: 'server 1',
    status: 'online'
  }, {
    name: 'server 2',
    status: 'offline'
  }];

  createServer(event: MouseEvent, inputName: HTMLInputElement, inputStatus) {
    // console.log(event, inputName.value, inputStatus.value);
    console.log(this.serverName);
    console.log(this.serverStatus);
    this.servers.push({
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
