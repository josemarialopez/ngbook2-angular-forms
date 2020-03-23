import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltSkuFormComponent } from './built-sku-form.component';

describe('BuiltSkuFormComponent', () => {
  let component: BuiltSkuFormComponent;
  let fixture: ComponentFixture<BuiltSkuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltSkuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltSkuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
