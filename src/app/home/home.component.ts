import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { PensionService } from '../pension.service';
import { RESULTS } from '../models/fundI.ytd';
import { RESULTSII } from '../models/fundII.ytd';
import { RESULTSIII } from '../models/fundIII.ytd';
import { RESULTSIV } from '../models/fundIV.ytd';



export class Pension {
  fund1: number;
  fund2: number;
  fund3: number;
  fund4: number;
  fund_date: string;
  date: string;
  provider: string
  sn: number;
}

export class Fund {
  fund: string;
  date: string;
  provider: string
  sn: number;
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  pensions: any = [];
  fund1: any = []; fund2: any = []; fund3: any = []; fund4: any = [];
  inception1: any = [];
  inception2: any = [];
  inception3: any = [];
  inception4: any = [];
  Date = new Date(); 
  year = this.Date.getUTCFullYear(); 
  lastyear = this.Date.getUTCFullYear() - 1;
  results = RESULTS;
  resultsii = RESULTSII;
  resultsiii = RESULTSIII;
  resultsiv = RESULTSIV;
  displayedColumns = [];
  price = [
    {displayedColumns: 'Fund 1',value:'fund1'},
    {displayedColumns: 'Fund 2',value:'fund2'},
    {displayedColumns: 'Fund 3',value:'fund3'},
    {displayedColumns: 'Fund 4',value:'fund4'},
  ];
  provider = [{displayedColumns: 'Provider',value:'provider'}]
  incDisplay1 = [{displayedColumns: '(%)',value:'inception_fund1'}]
  incDisplay2 = [{displayedColumns: '(%)',value:'inception_fund2'}]
  incDisplay3 = [{displayedColumns: '(%)',value:'inception_fund3'}]
  incDisplay4 = [{displayedColumns: '(%)',value:'inception_fund4'}]
  retDisplay1 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund1'}]
  retDisplay2 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund2'}]
  retDisplay3 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund3'}]
  retDisplay4 = [{displayedColumns: `YTD ${this.year} (%)`,value:'returns_fund4'}]
  incProvider = [{displayedColumns: 'Fund Name',value:'provider'}]
  incPrice1 = [{displayedColumns: 'Opening Price',value:'fund1_price'},{displayedColumns: 'Current Price',value:'fund1'}]
  incPrice2 = [{displayedColumns: 'Opening Price',value:'fund2_price'},{displayedColumns: 'Current Price',value:'fund2'}]
  incPrice3 = [{displayedColumns: 'Opening Price',value:'fund3_price'},{displayedColumns: 'Current Price',value:'fund3'}]
  incPrice4 = [{displayedColumns: 'Opening Price',value:'fund4_price'},{displayedColumns: 'Current Price',value:'fund4'}]
  fullYear = [{displayedColumns: 'Opening Price',value:'yend'},{displayedColumns: 'Last Price',value:'latest'}]
  fullDisplay = [{displayedColumns: '(%)', value1: 'yend', value2: 'latest'}]
  date = [
    {displayedColumns: 'Date',value:'fund_date'},]
    incDate = [
      {displayedColumns: 'Date',value:'date'},]
  constructor(private pensionService :PensionService) { }
  
  ngOnInit() {
    this.getPensions();
    this.getFund1();
    this.getFund2();
    this.getFund3();
    this.getFund4();
    this.getInception1();
    this.getInception2();
    this.getInception3();
    this.getInception4();
    this.provider.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
      console.log(this.displayedColumns) 
     })
    this.price.map(x =>{
     this.displayedColumns.push(x.displayedColumns);
    })
     this.date.map(x =>{
      this.displayedColumns.push(x.displayedColumns);
     })

    
    
  }

  getPensions(): void {
    this.pensionService.getPensions()
      .subscribe((data: any) => {
        this.pensions = data.pensions
        console.log(this.pensions)
      });
  }

   getFund1(): void {
    this.pensionService.getReturns1()
      .subscribe((data: any) => {
        this.fund1 = data.result 
      })
          
  }

  getFund2(): void {
    this.pensionService.getReturns2()
      .subscribe((data: any) => {
        this.fund2 = data.result
      })
          
  }

  getFund3(): void {
    this.pensionService.getReturns3()
      .subscribe((data: any) => {
        this.fund3 = data.result 
      })
          
  }

  getFund4(): void {
    this.pensionService.getReturns4()
      .subscribe((data: any) => {
        this.fund4 = data.result 
      })
          
  }

  getInception1(): void {
    this.pensionService.getInception1()
      .subscribe((data: any) => {
        this.inception1 = data.result 
        // this.dataSource = this.inception1
      })
          
  }

  getInception2(): void {
    this.pensionService.getInception2()
      .subscribe((data: any) => {
        this.inception2 = data.result 
      })
          
  }

  getInception3(): void {
    this.pensionService.getInception3()
      .subscribe((data: any) => {
        this.inception3 = data.result 
      })
          
  }

  getInception4(): void {
    this.pensionService.getInception4()
      .subscribe((data: any) => {
        this.inception4 = data.result 
      })
          
  }


  // ranking() {
  
   
  //   for (const key in this.armTempPensions) {

  //     let price1 = this.armTempPensions[key].unit_price;
  //     let price2 = this.premiumTempPensions[key].unit_price; 

  //     const [day, month, year]: string[] = this.armTempPensions[key].date.split('/');
  //     const [day1, month1, year1]: string[] = this.premiumTempPensions[key].date.split('/');


  //     let data1 = `${year}/${month}/${day}`;
  //     let data2 = `${year1}/${month1}/${day1}`;
      
  //     let date1 = Date.parse(data1);
  //     let date2 = Date.parse(data2);
      
  //     if (date1 === date2) {
  //       if (parseFloat(price1) ===  parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price1) > parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price2) > parseFloat(price1)) {
  //         this.result.push(this.premiumTempPensions[key]);
  //         this.result.push(this.armTempPensions[key]);
  //       } 
  //     }
  //     else if (date2 < date1) {
  //       if (parseFloat(price1) === parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price1) > parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price2) > parseFloat(price1)) {
  //         this.result.push(this.premiumTempPensions[key]);
  //         this.result.push(this.armTempPensions[key]);
  //       } 
  //     }
  //     else if (date1 < date2) {
  //       if (parseFloat(price1) === parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price1) > parseFloat(price2)) {
  //         this.result.push(this.armTempPensions[key]);
  //         this.result.push(this.premiumTempPensions[key]);
  //       }
  //       else if (parseFloat(price2) > parseFloat(price1)) {
  //         this.result.push(this.premiumTempPensions[key]);
  //         this.result.push(this.armTempPensions[key]);
  //       } 
  //     }
  //   }
  // }

}

@Pipe({ name: 'values',  pure: false })
export class ValuesPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value).map(key => value[key]);
  }
}