import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<any>();
  @ViewChild('inputServerName') serverNameInput: ElementRef;
  @ViewChild('inputServerStatus') serverStatusInput: ElementRef;
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
    console.log(this.serverNameInput, this.serverStatusInput);
    // const newServer = {
    //   name: this.serverName,
    //   status: this.serverStatus,
    //   type: type
    // };
    const newServer = {
      name: this.serverNameInput.nativeElement.value,
      status: this.serverStatusInput.nativeElement.value,
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
