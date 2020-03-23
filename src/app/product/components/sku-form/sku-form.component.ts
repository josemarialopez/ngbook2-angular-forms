import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.css']
})
export class SkuFormComponent implements OnInit {

  control = new FormControl('sku', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
  }

}
