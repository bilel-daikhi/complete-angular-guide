import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-route',
  templateUrl: './child-route.component.html',
  styleUrls: ['./child-route.component.css']
})
export class ChildRouteComponent {
  id!:number;
  constructor(private router:ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe(params=>{
this.id=params['id'];
    })
  }
}
