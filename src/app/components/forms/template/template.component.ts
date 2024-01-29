import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
@ViewChild('f')
myForm!:NgForm;
defaultValue: string="";
genders = ['male', 'female'];

// we can access form on submit using onSubmit function and passing form refference to the methode
/*  onSubmit(f:NgForm) {
 console.log(f);
}
*/
onSubmit() {
  console.log(this.myForm);
  this.myForm.reset();  
 }
}
