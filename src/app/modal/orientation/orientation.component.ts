import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-orientation',
  templateUrl: './orientation.component.html',
  styleUrls: ['./orientation.component.css']
})
export class OrientationComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrientationComponent>,) { }

  ngOnInit(): void {
  }
  onClose(){
    this.dialogRef.close()
  }

}
