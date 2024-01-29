import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
selector:'[hightLight]'

})
export class HighLightDirective implements OnInit{
    constructor(private elemntRef:ElementRef){}
    ngOnInit(): void {
        console.log(this.elemntRef.nativeElement)
        this.elemntRef.nativeElement.style.backgroundColor='blue';
    }

}