import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
 
handleSubmit() {
 console.log(this.signUpForm)
}
forbiddenUsernames = ['hassen', 'ashref'];
  genders = ['male', 'female'];
  signUpForm!:FormGroup;
  getJobs():FormArray{
    return <FormArray>this.signUpForm.get('jobs');
  }
  ngOnInit(): void {
  this.signUpForm =new FormGroup({
    'username':new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
    'email':new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
    'gender':new FormControl('male',Validators.required),
    'jobs':new FormArray([]),
    'adressDetails': new FormGroup({
      'adress':new FormControl(null,Validators.required),
      'zip':new FormControl(null,Validators.required)
   
    })

  });
     // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signUpForm.statusChanges.subscribe((status) => console.log(status));
    this.signUpForm.setValue({
      userData: {
        username: 'Bilel',
        email: 'bilel@test.com',
      },
      gender: 'male',
      hobbies: [],
    });
    this.signUpForm.patchValue({
      userData: {
        username: 'basma',
      },
    });
  }

  handleAddJob(){
    const job=new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('jobs')).push(job);

  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }
}
