import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.background-color') backgroundColor: String = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    this.backgroundColor = 'black';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
  }

}
