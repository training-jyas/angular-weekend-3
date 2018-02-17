import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {
  newServer: any;
  constructor() { }

  ngOnInit() {
  }

  serverWasCreated(newServer: any) {
    console.log(newServer);
    this.newServer = newServer;
  }

}
