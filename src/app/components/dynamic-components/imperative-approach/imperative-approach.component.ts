import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';
import { DynamicChildLoaderDirective } from '../dynamic-child-loader.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-imperative-approach',
  templateUrl: './imperative-approach.component.html',
  styleUrls: ['./imperative-approach.component.css']
})
export class ImperativeApproachComponent {
  @ViewChild(DynamicChildLoaderDirective, { static: true })
dynamicChild!: DynamicChildLoaderDirective;
private closeSub: Subscription;
  constructor(private viewContainerRef: ViewContainerRef){}
showDialog() {
  const component = this.dynamicChild.viewContainerRef.createComponent(AlertComponent);
  component.instance.message=" Using imperative approach !";
  this.closeSub = component.instance.close.subscribe(() => {
    this.closeSub.unsubscribe();
    this.dynamicChild.viewContainerRef.clear();
  });
}

}
