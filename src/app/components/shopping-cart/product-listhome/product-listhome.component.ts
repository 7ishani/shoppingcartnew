import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-listhome',
  templateUrl: './product-listhome.component.html',
  styleUrls: ['./product-listhome.component.css']
})
export class ProductListhomeComponent implements OnInit {

  productList: Product[] = []

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products;
    })
  }


}
