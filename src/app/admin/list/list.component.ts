import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


import { DataSource } from '@angular/cdk/table';
import { PensionService } from '../../_services';
import { Pension } from '../../_models';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['provider', 'fund1', 'fund2',
         'fund3', 'fund4',  'fund_date'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private pensionService:PensionService
  ) { }


  ngOnInit(): void {
    this.pensionService.getPensions()
      .subscribe((data: any) => {
        this.dataSource = new MatTableDataSource(data.result)
      });
    this.dataSource.paginator = this.paginator;
  }
  
  onDelete(id: any) {
    this.pensionService.deletePension(id)
  }

  onUpdate(id: any){
    this.pensionService.getPensionByID(id)
  }

}

export class PensionDataSource extends DataSource<Pension> {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private pensionService: PensionService) { super() }

  subject: BehaviorSubject<Pension[]> = new BehaviorSubject<Pension[]>([]);

  connect(): Observable<Pension[]> {

    this.pensionService.getPensions()
      .subscribe(res => {
        this.subject.next(res);
      });

    return this.subject
  }

  disconnect() {
    this.subject.complete();
    this.subject.observers = [];
  }

}
