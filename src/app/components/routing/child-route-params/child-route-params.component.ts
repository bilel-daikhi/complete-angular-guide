import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-child-route-params',
  templateUrl: './child-route-params.component.html',
  styleUrls: ['./child-route-params.component.css']
})
export class ChildRouteParamsComponent implements OnInit {
  role!:string;
  constructor(private authService:AuthService){}
  ngOnInit(): void {
this.authService.subjectRole.subscribe({
 next:(value)=>{
  this.role=value;
 }
})
  }

}
