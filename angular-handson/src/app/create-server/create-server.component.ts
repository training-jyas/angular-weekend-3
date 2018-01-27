import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output('serverCreated') serverCreated = new EventEmitter<any>();
  header1 = 'Create Server';
  isButtonDisabled = false;
  serverNamePlaceholder = 'Please enter a server name';
  serverStatusPlaceholder = 'Please enter a server status';
  serverName = 'Server 1';
  serverStatus = 'offline';
  constructor() { }

  ngOnInit() {
  }

  createServer(event: MouseEvent, type: string) {
    // console.log(event, inputName.value, inputStatus.value);
    console.log(this.serverName);
    console.log(this.serverStatus);
    const newServer = {
      name: this.serverName,
      status: this.serverStatus,
      type: type
    };
    this.serverCreated.emit(newServer);
    // this.servers.push({
    //   name: this.serverName,
    //   status: this.serverStatus,
    //   type: type
    // });
    // this.serversCache.push({
    //   name: this.serverName,
    //   status: this.serverStatus,
    //   type: type
    // });
  }

}
