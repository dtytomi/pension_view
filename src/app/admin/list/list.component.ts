import { Component, OnInit } from '@angular/core';
import { PensionService } from 'src/app/pension.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private pensionService:PensionService) { }
  pensions: Observable<unknown>
  ngOnInit(): void {
    this.pensionService.getFPensions().subscribe(data=>{
      this.pensions = data.pension
      console.log(this.pensions)
    })
  }
  onDelete(id) {
    this.pensionService.deletePension(id)
  }
  onUpdate(id){
    this.pensionService.getFpension(id)
  }

}
