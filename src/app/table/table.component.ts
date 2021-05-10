import { Component, OnInit, Input, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import * as moment from 'moment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{

@Input() dataSource : any;
@Input() provider : any;
@Input() price : any;
@Input() display : any;
@Input() display1 : any;
@Input() date : any;
@Input() serial : any;
@Input() company : any;
@Input() stock : any;

@ViewChild(MatSort, {static: true}) sort: MatSort;

displayedColumns = [];

  ngOnInit() {

    // console.log(this.provider, this.serial) 
    // this.displayedColumns.push("S/N")
    this.dataSource.sort = this.sort;

    if(this.serial) {
      this.serial.map((x: any)  => {
        this.displayedColumns.push(x.displayedColumns);
      })
    }

    this.provider.map((x: any)  => {
      this.displayedColumns.push(x.displayedColumns);
    })

    if (this.display) {
      this.display.map((x: any) => {
        this.displayedColumns.push(x.displayedColumns)
      })
    }

    if (this.display1) {
      this.display1.map((x: any) => {
        this.displayedColumns.push(x.displayedColumns)
      })
    }

    this.price.map((x: any) =>{
      this.displayedColumns.push(x.displayedColumns);
    })    
    
    if(this.date) {
      this.date.map((x: any) =>{
        this.displayedColumns.push(x.displayedColumns);
      })
    }
    
  }

  sortData(sort: Sort) {
    // Sort sorts the current list, but it wasnt updating it unless i reassigned.
    this.dataSource.data = this.dataSource.data.sort((a : any, b: any) => {
      const isAsc = sort.direction === 'asc';
      return this._compare(a[sort.active], b[sort.active], isAsc);
    });
  }

  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

}

@Pipe({name: 'fundDate'})
export class FundDatePipe implements PipeTransform {
  transform(value: Date) { 
    if (moment(value, ["MM-DD-YYYY", "DD-MM", "YYYY-MM-DD"]).isValid() == true) {

      if (moment(value).format('LL') !== 'Invalid date') {

        return moment(value).format('LL');
      }
      else {
        return value;
      }
    }
    else {
      return value;
    }
  }
}
