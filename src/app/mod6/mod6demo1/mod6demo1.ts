import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
})
export class Mod6demo1 {

  // FORM GROUP

  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/[a-z0-9]{8,}/i)]),
      birthdate: new FormControl(null, [Validators.required, ]),
      newsletter: new FormControl(true),
      job: new FormControl('dev', [Validators.required]),
      note: new FormControl(5, [Validators.required, Validators.min(0), Validators.maxLength(10)]),
    })
  }
  dateValidator(control: AbstractControl) {
    if (control && control.value) {
      if (new Date() < new Date(control.value)) {
        return {dateGreaterThan: true}
      }
    }
    return null
  }


  protected onSubmit() {
    const formData = this.form.value;
    if (this.form.valid) {
    console.log(formData);
    }else {
      console.log("nope")
    }
  }

  // TEMPLATE DRIVEN FORM

  public name:  string = ""

  protected checkName() {
    if (this.name.trim().length === 0) {
      console.log("Champ requis");
    }
  }
}
