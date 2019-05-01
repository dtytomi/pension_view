import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PensionService } from '../pension.service';

export class Pension {
  price: number;
  date: string;
  sn: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

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
    this.pensionService.getPremium()
      .subscribe(pensions => {
        this.premiumPensions = pensions;
        for (let index = 0; index < 3; index++) {
          this.premiumTempPensions.push(this.premiumPensions[index]);
        }
      });
    this.pensionService.getArm()
      .subscribe(pensions => {
        this.armPensions = pensions;
        for (let index = 0; index < 3; index++) {
          this.armTempPensions.push(this.armPensions[index]);
        }
      });
      
  }

  ngAfterViewInit() {
    this.ranking();
  }

  ranking() {
    for (const key in this.armTempPensions) {
      let date1 = Date.parse(this.armTempPensions[key].date);
      let date2 = Date.parse(this.premiumTempPensions[key].date);

      if (date1 === date2) {
        this.result.push(this.armTempPensions[key]);
        this.result.push(this.premiumTempPensions[key]);
      }
      else if (date2 < date1) {
        this.result.push(this.armTempPensions[key]);
        this.result.push(this.premiumTempPensions[key]);
      }
      else if (date1 < date2) {
        this.result.push(this.armTempPensions[key]);
        this.result.push(this.premiumTempPensions[key]);
      }
    }
    console.log(this.result);
  }

}
