import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PensionService, StockService, RateService } from '../_services';
import { ytd_2019_fund1, ytd_2020_fund1 } from '../_models/fundI.ytd';
import { ytd_2019_fund2, ytd_2020_fund2 } from '../_models/fundII.ytd';
import { ytd_2019_fund3, ytd_2020_fund3 } from '../_models/fundIII.ytd';
import { ytd_2019_fund4, ytd_2020_fund4 } from '../_models/fundIV.ytd';

const moment = require('moment');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  
  pensions: any = [];
  rates: any = [];
  bdcRates: any = [];
  stocks: any = [];
  fund1: any = []; fund2: any = []; fund3: any = []; fund4: any = [];
  inception1: any = [];
  inception2: any = [];
  inception3: any = [];
  inception4: any = [];
  date_value = new FormControl(new Date());

  Date = new Date(); 

  year = this.Date.getUTCFullYear(); 
  lastyear = this.Date.getUTCFullYear() - 1;
  yearbefore = this.Date.getUTCFullYear() - 2;
  ytd_2019_results = ytd_2019_fund1;
  ytd_2019_resultsii = ytd_2019_fund2;
  ytd_2019_resultsiii = ytd_2019_fund3;
  ytd_2019_resultsiv = ytd_2019_fund4;

  ytd_2020_results = ytd_2020_fund1;
  ytd_2020_resultsii = ytd_2020_fund2;
  ytd_2020_resultsiii = ytd_2020_fund3;
  ytd_2020_resultsiv = ytd_2020_fund4;

  displayedColumns = [];

  price = [
    {displayedColumns: 'Fund 1',value:'fund1'},
    {displayedColumns: 'Fund 2',value:'fund2'},
    {displayedColumns: 'Fund 3',value:'fund3'},
    {displayedColumns: 'Fund 4',value:'fund4'},
  ];

  provider = [{displayedColumns: 'Provider',value:'provider'}]

  rate = [
    {displayedColumns: 'Selling ₦',value:'selling'},
    {displayedColumns: 'Buying ₦',value:'buying'},
    {displayedColumns: 'Opening Price',value:'opening_price'},
    {displayedColumns: `YTD ${this.year} (%)`,value:'rate_ytd'}
  ];

  bdcRate = [
    {displayedColumns: 'Selling ₦',value:'selling'},
    {displayedColumns: 'Buying ₦',value:'buying'}
  ];

  currency = [{displayedColumns: 'Currency',value:'currency'},]
  serialCurrency = [{displayedColumns: 'SN',value:'currency'}]

  stock = [
    {displayedColumns: 'Closing Price',value:'closing_price'},
    {displayedColumns: 'Opening Price',value:'opening_price'},
    {displayedColumns: `YTD ${this.year} (%)`,value:'stock_ytd'}
  ];

  company = [{displayedColumns: 'Company',value:'company'}]
  serialCompany = [{displayedColumns: 'SN',value:'company'}]

  incDisplay1 = [{displayedColumns: '(%)',value:'inception_fund1'}]
  incDisplay2 = [{displayedColumns: '(%)',value:'inception_fund2'}]
  incDisplay3 = [{displayedColumns: '(%)',value:'inception_fund3'}]
  incDisplay4 = [{displayedColumns: '(%)',value:'inception_fund4'}]

  retDisplay1 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund1'}]
  retDisplay2 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund2'}]
  retDisplay3 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund3'}]
  retDisplay4 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund4'}]

  incProvider = [{displayedColumns: 'Fund Name',value:'provider'}]
  serialProvider = [{displayedColumns: 'SN',value:'provider'}]

  incPrice1 = [
      {displayedColumns: 'Opening Price',value:'fund1_price'},
      {displayedColumns: 'Current Price',value:'fund1'}
    ]
  incPrice2 = [
      {displayedColumns: 'Opening Price',value:'fund2_price'},
      {displayedColumns: 'Current Price',value:'fund2'}
    ]
  incPrice3 = [
      {displayedColumns: 'Opening Price',value:'fund3_price'},
      {displayedColumns: 'Current Price',value:'fund3'}
    ]
  incPrice4 = [
      {displayedColumns: 'Opening Price',value:'fund4_price'},
      {displayedColumns: 'Current Price',value:'fund4'}
    ]

  fullYear = [
    {displayedColumns: 'Opening Price',value:'yend'},
    {displayedColumns: 'Last Price',value:'latest'}
  ]
    
  fullDisplay = [{displayedColumns: '(%)', value1: 'yend', value2: 'latest'}]

  date = [
    {displayedColumns: 'Date',value:'fund_date'}]
  incDate = [
    {displayedColumns: 'Date',value:'date'}]
  stockDate = [
    {displayedColumns: 'Date',value:'trading_date'}]
  rateDate = [
    {displayedColumns: 'Date',value:'rate_date'}]


  @ViewChild(MatSort, {static: false}) sort: MatSort;
  
  constructor(
    private pensionService :PensionService,
    private stockService :StockService,
    private rateService :RateService
    ) { }
  
  ngOnInit() {
    
    
    this.getFund1(null);
    this.getFund2(null);
    this.getFund3(null);
    this.getFund4(null);
    this.getStocks();
    this.getRates();
    this.getBDCRates();
    this.getPensions(null);
    // this.getInception1();
    // this.getInception2();
    // this.getInception3();
    // this.getInception4();
    this.provider.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
     })

    this.price.map(x =>{
     this.displayedColumns.push(x.displayedColumns);
    })

    this.stock.map(x =>{
     this.displayedColumns.push(x.displayedColumns);
    })

     this.date.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
     })    
  }

  modelChangeFn(value) {
    this.date_value = value;
    let date = moment(this.date_value).format('YYYY-MM-DD');

    this.getPensions(date);
    this.getFund1(date);
    this.getFund2(date);
    this.getFund3(date);
    this.getFund4(date);
  }
  
  getPensions(date): void {
    this.pensionService.getPensions(date)
      .subscribe((data: any) => {
        this.pensions = new MatTableDataSource(data.result)
      });
  }

  getStocks(): void {
    this.stockService.getStockYTD()
      .subscribe((data: any) => {
        this.stocks = new MatTableDataSource(data.result) 
      })
  }

  getRates(): void {
    this.rateService.getRates()
      .subscribe((data: any) => {
        this.rates = new MatTableDataSource(data.result) 
      })
  }

  getBDCRates(): void {
    this.rateService.getBDCRates()
      .subscribe((data: any) => {
        this.bdcRates = new MatTableDataSource(data.result) 
      })
  }

  getFund1(date): void {
    this.pensionService.getReturns1(date)
      .subscribe((data: any) => {
        this.fund1 = new MatTableDataSource(data.result) 
      })
          
  }

  getFund2(date): void {
    this.pensionService.getReturns2(date)
      .subscribe((data: any) => {
        // console.log(data.result)
        this.fund2 = new MatTableDataSource(data.result)
      })
  }

  getFund3(date): void {
    this.pensionService.getReturns3(date)
      .subscribe((data: any) => {
        this.fund3 = new MatTableDataSource(data.result) 
      })
          
  }

  getFund4(date): void {
    this.pensionService.getReturns4(date)
      .subscribe((data: any) => {
        this.fund4 = new MatTableDataSource(data.result) 
      })
          
  }

  getInception1(): void {
    this.pensionService.getInception1()
      .subscribe((data: any) => {
        this.inception1 = new MatTableDataSource(data.result) 
        // this.dataSource = this.inception1
      })
          
  }

  getInception2(): void {
    this.pensionService.getInception2()
      .subscribe((data: any) => {
        this.inception2 = new MatTableDataSource(data.result) 
      })
          
  }

  getInception3(): void {
    this.pensionService.getInception3()
      .subscribe((data: any) => {
        this.inception3 = new MatTableDataSource(data.result) 
      })
          
  }

  getInception4(): void {
    this.pensionService.getInception4()
      .subscribe((data: any) => {
        this.inception4 = new MatTableDataSource(data.result) 
      })
          
  }

}

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}