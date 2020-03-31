import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListhomeComponent } from './product-listhome.component';

describe('ProductListhomeComponent', () => {
  let component: ProductListhomeComponent;
  let fixture: ComponentFixture<ProductListhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
