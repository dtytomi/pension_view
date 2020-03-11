import { Component, OnInit } from '@angular/core';
import { PensionService } from '../pension.service';
import { tap } from 'rxjs/operators';


export class Pension {
  fund1: string;
  fund2: string;
  fund3: string;
  fund4: string;
  fund_date: string;
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

  pensions: Pension;
  premiumPensions: Pension;
  armTempPensions: Pension[] = [];
  premiumTempPensions: Pension[] = [];
  result: Pension[] = [];

  constructor(private pensionService :PensionService) { }

  ngOnInit() {
    this.getPensions();
    this.getAllFunds();
  }

  getPensions(): void {
    this.pensionService.getPensions()
      .subscribe(data => {
        this.pensions = data.pensions[0]
        console.log(this.pensions)
      })
          
  }
  getAllFunds() {
    console.log('im here')
    this.pensionService.getAllFunds().subscribe(data=>{
      console.log(data)
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
