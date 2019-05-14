import { Component, OnInit } from '@angular/core';
import { PensionService } from '../pension.service';
import { forkJoin } from 'rxjs';


export class Pension {
  unit_price: string;
  date: string;
  sn: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  armPensions: Pension;
  premiumPensions: Pension;
  armTempPensions: Pension[] = [];
  premiumTempPensions: Pension[] = [];
  result: Pension[] = [];

  constructor(private pensionService :PensionService) { }

  ngOnInit() {
    this.getPensions();
  }

  getPensions(): void {
    forkJoin(
      this.pensionService.getPremium(),
      this.pensionService.getArm()
    ).subscribe(([res1, res2]) => {
      this.premiumPensions = res1;
      this.armPensions = res2;
      for (let index = 0; index < 3; index++) {
        this.premiumTempPensions.push(this.premiumPensions[index]);
        this.armTempPensions.push(this.armPensions[index]);
      }
      this.ranking();
    });
    
  }

  ranking() {
  
   
    for (const key in this.armTempPensions) {

      let price1 = this.armTempPensions[key].unit_price;
      let price2 = this.premiumTempPensions[key].unit_price; 

      const [day, month, year]: string[] = this.armTempPensions[key].date.split('/');
      const [day1, month1, year1]: string[] = this.premiumTempPensions[key].date.split('/');


      let data1 = `${year}/${month}/${day}`;
      let data2 = `${year1}/${month1}/${day1}`;
      
      let date1 = Date.parse(data1);
      let date2 = Date.parse(data2);
      
      if (date1 === date2) {
        if (parseFloat(price1) ===  parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price1) > parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price2) > parseFloat(price1)) {
          this.result.push(this.premiumTempPensions[key]);
          this.result.push(this.armTempPensions[key]);
        } 
      }
      else if (date2 < date1) {
        if (parseFloat(price1) === parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price1) > parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price2) > parseFloat(price1)) {
          this.result.push(this.premiumTempPensions[key]);
          this.result.push(this.armTempPensions[key]);
        } 
      }
      else if (date1 < date2) {
        if (parseFloat(price1) === parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price1) > parseFloat(price2)) {
          this.result.push(this.armTempPensions[key]);
          this.result.push(this.premiumTempPensions[key]);
        }
        else if (parseFloat(price2) > parseFloat(price1)) {
          this.result.push(this.premiumTempPensions[key]);
          this.result.push(this.armTempPensions[key]);
        } 
      }
    }
  }

}
