import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit{
  constructor(private authService:AuthService){}
  ngOnInit(): void {
   this.authService.subjectRole.next('user');
  }

}
