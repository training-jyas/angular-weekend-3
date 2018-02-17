import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elem: ElementRef) {
    console.log(this.elem);
    this.elem.nativeElement.style.background = 'yellow';
  }

}
