import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { AuthService } from '../_services';

@Component({
  selector: 'app-control',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  
  constructor( 
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
