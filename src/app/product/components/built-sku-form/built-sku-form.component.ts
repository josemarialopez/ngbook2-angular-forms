import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-built-sku-form',
  templateUrl: './built-sku-form.component.html',
  styleUrls: ['./built-sku-form.component.css']
})
export class BuiltSkuFormComponent implements OnInit {
  form: FormGroup;
  sku: AbstractControl;

  constructor(private _formBuilder: FormBuilder ) {
    this.form = this._formBuilder.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.form.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('Sku changed to: ', value);
      }
    );

    this.form.valueChanges.subscribe(
      (form: any) => {
        console.log('Form changed to: ', form);
      }
    );
  }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log("You submitted value: ", value);
  }

}
