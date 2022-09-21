import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open')classStyle: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
  }
  
  @HostListener('click') onClickHandler() {
    if (!this.classStyle) {
      // this.renderer.addClass(this.elementRef.nativeElement, 'open');
      this.classStyle = true;
    } else {
      // this.renderer.removeClass(this.elementRef.nativeElement,'open');
      this.classStyle = false;
    }
  }
}
