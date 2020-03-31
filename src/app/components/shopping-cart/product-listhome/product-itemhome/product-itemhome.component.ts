import { Component, OnInit,Input } from '@angular/core';
import { Product } from 'src/app/models/product'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-itemhome',
  templateUrl: './product-itemhome.component.html',
  styleUrls: ['./product-itemhome.component.css']
})
export class ProductItemhomeComponent implements OnInit {

  user: firebase.User;

  @Input() productItem: Product

  constructor(
    private msg: MessengerService,
    private cartService:CartService,
    private auth: AuthService, 
    private router: Router
  )
   { }

   ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
        this.user = user;
      })
  }
  logout() {
    this.auth.logout();
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
}
}