import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHiliterDirective]'
})
export class BetterHiliterDirectiveDirective implements OnInit {
  @Input() highLightColor:string='red';
  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
  @HostBinding('style.color') textColor:string='black';

  constructor( private refElement:ElementRef,private renderer:Renderer2) { }
  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseEnter(){
    this.backgroundColor=this.highLightColor;
    this.textColor='white';
   // this.renderer.setStyle(this.refElement.nativeElement,'background-color','yellow');

  }
  @HostListener('mouseleave') mouseLeave(){
    this.backgroundColor='transparent';
    this.textColor='black';
    //this.renderer.setStyle(this.refElement.nativeElement,'background-color','transparent');

  }
}
