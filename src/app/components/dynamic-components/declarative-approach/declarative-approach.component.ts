import { Component } from '@angular/core';

@Component({
  selector: 'app-declarative-approach',
  templateUrl: './declarative-approach.component.html',
  styleUrls: ['./declarative-approach.component.css']
})
export class DeclarativeApproachComponent {
handleClose() {
  this.isVisible=false;
}
isVisible: boolean=false;

showDialog(){
this.isVisible=true;
}

}
