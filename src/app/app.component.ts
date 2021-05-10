import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrientationComponent } from './modal/orientation/orientation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pension-frontend';
  constructor(private window: Window, public dialog: MatDialog){}
  ngOnInit(){

  }
}
