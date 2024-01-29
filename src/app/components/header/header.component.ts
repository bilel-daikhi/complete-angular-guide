import { Component, OnInit } from '@angular/core';
import { AuthService } from '../routing/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLoggedIn:boolean=false;
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(): void {
   this.authService.isAuthenticated().subscribe({
    next:(value)=>{
      this.isLoggedIn=value;
    }
   })
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
 
 
    goToLogin() {
    this.router.navigate(['/login']);
    }
}
