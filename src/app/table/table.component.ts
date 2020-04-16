import { Component, OnInit, OnChanges, Input,ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
@Input() dataSource;
@Input() provider;
@Input() price;
@Input() display;
@Input() display1;
@Input() date;
@ViewChild(MatSort, {static: true}) sort: MatSort;
displayedColumns = [];

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.provider.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
      // console.log(this.displayedColumns) 
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
    // console.log(this.displayedColumns)
    // console.log(this.dataSource.sort)
    this.dataSource.sort = this.sort;
    // console.log(this.dataSource.sort)
  }
  sortData(sort: Sort){
    // Sort sorts the current list, but it wasnt updating it unless i reassigned.
    this.dataSource.data = this.dataSource.data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return this._compare(a[sort.active], b[sort.active], isAsc);
    });
  }
  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
  
  
}
