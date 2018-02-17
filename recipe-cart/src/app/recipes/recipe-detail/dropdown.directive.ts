import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') addOpen = false;

  constructor() { }

  @HostListener('click')
  addClassOpen() {
    this.addOpen = !this.addOpen;
  }

}
