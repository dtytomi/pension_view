import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public authService:AuthService ) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
