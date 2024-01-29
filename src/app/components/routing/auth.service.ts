import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, Subscription, interval, of, timeInterval } from "rxjs";
@Injectable({ providedIn: 'root' })
export class AuthService {
    loggedIn!: Observable<boolean>;
    subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    subjectRole: BehaviorSubject<string> = new BehaviorSubject<string>('user');
    isLoggedIn!:Subscription;
  isAuthenticated() {
   return this.subject;
   
  }

  login() {
    this.subject.next(true);
  }

  logout() {
    this.subject.next(false);
  }
  changeRole(role:string){
    this.subjectRole.next(role);
  }
}
