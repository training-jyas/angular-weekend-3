import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnDestroy {
  @Input('server') server: any;

  constructor() { }

  ngOnInit() {
  }
  
  ngOnDestroy() {
    console.log('server element is destroyed');
  }

}
