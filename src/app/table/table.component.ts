import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() dataSource;
@Input() provider;
@Input() price;
@Input() display;
@Input() display1;
@Input() date;
displayedColumns = [];

  constructor() { }

  ngOnInit() {
    this.provider.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
      console.log(this.displayedColumns) 
     })
    this.price.map(x =>{
     this.displayedColumns.push(x.displayedColumns);
    })
     
     if (this.display) {
       this.display.map(x=>{
         this.displayedColumns.push(x.displayedColumns)
       })
     }if (this.display1) {
      this.display1.map(x=>{
        this.displayedColumns.push(x.displayedColumns)
      })
    }
    if(this.date) {
      this.date.map(x =>{
       this.displayedColumns.push(x.displayedColumns);
      })
    }
  }

}
