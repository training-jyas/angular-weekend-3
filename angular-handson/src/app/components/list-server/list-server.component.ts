import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ContentChild,
  AfterContentInit,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css']
})
export class ListServerComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  @Input('newSrv') newServer: any;
  @ContentChild('p') paragraph;
  header2 = 'List';
  servers: Array < any > = [{
    name: 'server 1',
    status: 'online',
    type: '1'
  }, {
    name: 'server 2',
    status: 'offline',
    type: '2'
  }];
  serversCache = this.servers.slice();
  showType = 'all';

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('on change is called');
    if (changes.newServer && changes.newServer.currentValue) {
      this.servers.push(changes.newServer.currentValue);
    }
  }

  ngOnInit() {
    console.log('on init is called');
  }

  ngAfterContentInit() {
    console.log('after content init is called');
    console.log(this.paragraph);
  }

  ngAfterViewInit() {
    console.log('after view init is called');
  }

  ngOnDestroy() {
    console.log('on destroy is called');
  }

  toggleShow(type) {
    this.showType = type;
    switch (type) {
      case '1':
        this.servers = this.filterServers(type);
        break;
      case '2':
        this.servers = this.filterServers(type);
        break;
      case 'all':
      default:
        this.servers = this.filterServers(type);
    }
  }

  removeLatestServer() {
    this.servers.splice(this.servers.length - 1);
  }

  private filterServers(type: string): Array < any > {
    const servers = this.serversCache.slice();
    if (type === 'all') {
      return servers;
    }
    const output = [];
    console.log(servers);
    servers.forEach(item => {
      if (item.type === type) {
        console.log(item);
        output.push(item);
      }
    });
    return output;
  }
}
