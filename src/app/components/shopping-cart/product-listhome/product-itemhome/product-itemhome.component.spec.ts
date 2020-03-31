import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemhomeComponent } from './product-itemhome.component';

describe('ProductItemhomeComponent', () => {
  let component: ProductItemhomeComponent;
  let fixture: ComponentFixture<ProductItemhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
