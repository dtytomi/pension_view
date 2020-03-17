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
  year: number;
  lastyear: number;
  results = RESULTS;
  resultsii = RESULTSII;
  resultsiii = RESULTSIII;
  resultsiv = RESULTSIV;
  
  constructor(private pensionService :PensionService) { }

  ngOnInit() {
    this.getPensions();
    this.getAllFunds();
    this.getAllInception();

    let date = new Date(); 
    this.year = date.getUTCFullYear(); 
    this.lastyear = date.getUTCFullYear() - 1;
    
  }

  getPensions(): void {
    this.pensionService.getPensions()
      .subscribe((data: any) => {
        this.pensions = data.pensions[0]
        console.log(data)
      })
          
  }


  // getReturns1(): void {
  //   this.pensionService.getReturns1()
  //     .subscribe((data: any) => {
  //       this.fund1 = data.pensions 
  //     })
          
  // }

  // getReturns2(): void {
  //   this.pensionService.getReturns2()
  //     .subscribe((data: Fund) => {
  //       this.fund2 = data 
  //     })
          
  // }

  // getReturns3(): void {
  //   this.pensionService.getReturns3()
  //     .subscribe((data: any) => {
  //       this.fund3 = data 
  //     })
          
  // }

  // getReturn4(): void {
  //   this.pensionService.getReturns4()
  //     .subscribe((data: any) => {
  //       this.fund4 = data 
  //     })
          
  // }

  // getInception1(): void {
  //   this.pensionService.getInception1()
  //     .subscribe((data: any) => {
  //       this.inception1 = data 
  //     })
          
  // }

  // getInception2(): void {
  //   this.pensionService.getInception2()
  //     .subscribe((data: Fund) => {
  //       this.inception2 = data 
  //     })
          
  // }

  // getInception3(): void {
  //   this.pensionService.getInception3()
  //     .subscribe((data: any) => {
  //       this.inception3 = data 
  //     })
          
  // }

  // getInception4(): void {
  //   this.pensionService.getInception4()
  //     .subscribe((data: any) => {
  //       this.inception4 = data 
  //     })
          
  // }
  getAllFunds() {
    this.pensionService.getAllFunds().subscribe(data=>{
      this.fund1 = data.fund1;
      console.log(this.fund1)
      this.fund2 = data.fund2;
      this.fund3 = data.fund3;
      this.fund4 = data.fund4;
    })
  }
  
  getAllInception() {
    console.log()
    this.pensionService.getAllInceptions()
    .subscribe(data=>{
      this.inception1 = data.inception1;
      this.inception2 = data.inception2;
      this.inception3 = data.inception3;
      this.inception4 = data.inception4;
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