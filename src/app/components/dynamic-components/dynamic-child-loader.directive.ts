import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicChildLoader]'
})
export class DynamicChildLoaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) {}

}
