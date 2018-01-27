import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css']
})
export class ListServerComponent implements OnInit, OnChanges {
  @Input('newServer') newServer: any;
  header2 = 'List';
  servers: Array<any> = [{
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

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
  }

  toggleShow(type) {
    this.showType = type;
    switch (type) {
      case '1': this.servers = this.filterServers(type);
                break;
      case '2': this.servers = this.filterServers(type);
                break;
      case 'all':
      default: this.servers = this.filterServers(type);
    }
  }

  private filterServers (type: string): Array<any> {
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
