import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  employees$
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.authService.logout()
  }
}
