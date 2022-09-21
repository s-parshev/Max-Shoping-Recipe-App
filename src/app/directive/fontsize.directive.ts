import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector:'[appFontSize]'
})
export class FontSize implements OnInit{
  // constructor(private elementRef:ElementRef){}
  @Input() defaultColor:string = 'transperant';
  @Input() hoverColor:string = 'red';
  @HostBinding('style.backgroundColor')
  backgroundColor: string =this.defaultColor;
  constructor(private elRef:ElementRef, private renderer:Renderer2){}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'fontSize',
       '1rem'
       )
  }
  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'fontSize',
       '3rem'
       )
       this.backgroundColor =this.hoverColor;
      //  console.log(eventData)
  }
  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'fontSize',
       '1rem'
       )
       this.backgroundColor =this.defaultColor;
  }

}