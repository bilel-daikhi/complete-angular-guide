import { Component } from '@angular/core';
import { AuthService } from '../routing/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService:AuthService,private router:Router){}
authenticate() {
 this.authService.login();
 this.router.navigate(['/']);
}

}
