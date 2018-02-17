import {
  Directive,
  Renderer2,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('class.hover') addClassHover = false;
  constructor(private renderer: Renderer2,
    private elem: ElementRef) {
  }

  ngOnInit() {
    console.log(this.elem, this.renderer);
    // this.renderer.setStyle(this.elem.nativeElement, 'background', 'cyan');
  }

  @HostListener('mouseenter') onHover() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background', 'cyan');
    this.addClassHover = true;
  }

  @HostListener('mouseleave') onHoverOut() {
    // this.renderer.setStyle(this.elem.nativeElement, 'background', 'transparent');
    this.addClassHover = false;
  }

}
