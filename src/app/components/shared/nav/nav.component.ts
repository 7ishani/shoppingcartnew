import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  user: firebase.User;

  constructor(private auth: AuthService, 
    private router: Router) { }


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
