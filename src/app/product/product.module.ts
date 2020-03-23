import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { SkuFormComponent } from './components/sku-form/sku-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuiltSkuFormComponent } from './components/built-sku-form/built-sku-form.component';
import { NgmodelFormComponent } from './components/ngmodel-form/ngmodel-form.component';


@NgModule({
  declarations: [SkuFormComponent, BuiltSkuFormComponent, NgmodelFormComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [SkuFormComponent, BuiltSkuFormComponent, NgmodelFormComponent]
})
export class ProductModule { }
