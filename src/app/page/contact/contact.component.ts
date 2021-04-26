import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.form = this.fb.group({
      name: [''],
      last_name: [''],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    })
  }

  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }

  onSubmit(formDirective: FormGroupDirective){
    if(this.form.valid){
      console.log(this.form.value);
      formDirective.resetForm();
      this.form.reset();
    } else {
      this.form.get('email').markAsTouched();
      this.form.get('message').markAsTouched();
    }
  }

}
