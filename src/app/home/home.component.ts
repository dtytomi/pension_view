import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {

  pensions: Pension;

  constructor(private pensionService :PensionService) { }

  ngOnInit() {
    this.getPensions();
  }

  getPensions(): void {
    this.pensionService.getPremium()
      .subscribe(pensions => {
        this.pensions = pensions
      });
  }

}
