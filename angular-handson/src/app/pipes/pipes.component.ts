import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  users = [{
    name: 'sharath',
    doj: new Date(),
    role: 'Software Developer'
  }, {
    name: 'nandini',
    doj: new Date(),
    role: 'Automation Testing'
  }, {
    name: 'bharath',
    doj: new Date(),
    role: 'Developer'
  }, {
    name: 'peddyreddy',
    doj: new Date(),
    role: 'Does lot of stuff'
  }]

  constructor() { }

  ngOnInit() {
  }

}
