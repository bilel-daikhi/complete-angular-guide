import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit,OnDestroy {
  sub!:Subscription;
 mycounter:number=0;


  ngOnInit(): void {
  
   const subscriber= new Observable((observer) => {
    let counter=0;
    setInterval(()=>{
      observer.next(counter);

      if(counter>5)
      observer.error(new Error('Counter exxceeded the limit number!'))
      counter++;
    },1000)
  });
  this.sub=subscriber.subscribe((count)=>{
  this.mycounter=<number>count;
  },error=>{
console.log(error);    
  })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
