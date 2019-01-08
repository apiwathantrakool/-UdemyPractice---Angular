import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultBorder: String;
  @Input() highlightBorder: String = 'dashed';
  @HostBinding('style.background-color') backgroundColor: String = 'transparent';
  @HostBinding('style.border-style') borderStyle: String = this.defaultBorder;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    // this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'black');
    this.backgroundColor = 'black';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    this.borderStyle = this.highlightBorder;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'black');
    this.borderStyle = this.defaultBorder;
  }

}
