import { Component, OnInit } from '@angular/core';
import { PensionService } from '../pension.service';
import { tap } from 'rxjs/operators';


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

    let date = new Date(); 
    this.year = date.getUTCFullYear(); 

  }

  getPensions(): void {
    this.pensionService.getPensions()
      .subscribe((data: []) => {
        this.pensions = data 
      })
          
  }

  getFund1(): void {
    this.pensionService.getReturns1()
      .subscribe((data: any) => {
        this.fund1 = data 
      })
          
  }

  getFund2(): void {
    this.pensionService.getReturns2()
      .subscribe((data: Fund) => {
        this.fund2 = data 
      })
          
  }

  getFund3(): void {
    this.pensionService.getReturns3()
      .subscribe((data: any) => {
        this.fund3 = data 
      })
          
  }

  getFund4(): void {
    this.pensionService.getReturns4()
      .subscribe((data: any) => {
        this.fund4 = data 
      })
          
  }

  getInception1(): void {
    this.pensionService.getInception1()
      .subscribe((data: any) => {
        this.inception1 = data 
      })
          
  }

  getInception2(): void {
    this.pensionService.getInception2()
      .subscribe((data: Fund) => {
        this.inception2 = data 
      })
          
  }

  getInception3(): void {
    this.pensionService.getInception3()
      .subscribe((data: any) => {
        this.inception3 = data 
      })
          
  }

  getInception4(): void {
    this.pensionService.getInception4()
      .subscribe((data: any) => {
        this.inception4 = data 
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
