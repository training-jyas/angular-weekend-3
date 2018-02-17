import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numOdd = [];
  numEven = [];
  isOdd: string|boolean  = 'all';
  value = 11;

  constructor() { }

  ngOnInit() {
  }

  showOdd() {
    this.isOdd = true;
    this.numOdd = [];
    this.numArray.forEach(n => {
      if (this.isNumOdd(n)) {
        this.numOdd.push(n);
      }
    });
  }

  showEven() {
    this.isOdd = false;
    this.numEven = [];
    this.numArray.forEach(n => {
      if (!this.isNumOdd(n)) {
        this.numEven.push(n);
      }
    });
  }

  showAll() {
    this.isOdd = 'all';
  }

  isNumOdd(num: number) {
    return num % 2 !== 0 ? true : false;
  }

}
