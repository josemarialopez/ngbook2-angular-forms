import { Component } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-ngmodel-form',
  templateUrl: './ngmodel-form.component.html',
  styleUrls: ['./ngmodel-form.component.css']
})
export class NgmodelFormComponent {
  form: Form;
  productName: string;

  constructor() {
    this.productName = 'Ng-book: The Complete Guide to Angular';
  }

  onSubmit(value: string) {
    console.log('You submitted value: ', value);
  }
}
