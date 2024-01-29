import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent {
  @Input('squareNumber') squareNumber: number = 0;
  @Input('text') text: string = '';
  @Input('enabled') enabled: boolean = true;

  @Output('onSquareClick') onSquareClick: EventEmitter<number> = new EventEmitter();



  handleClick() {
    this.onSquareClick.emit(this.squareNumber);
  }

  getColor(text: string) {
    if(text ==='X')
      return  'blueColor';
    else if(text ==='O')
      return 'redColor';
    return null;

  }
}
