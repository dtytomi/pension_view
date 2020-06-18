import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PensionService } from 'src/app/pension.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form: FormGroup
  submit = false;
  providers = [
    "aiicopension",
    "aptpensions",
    "arm",
    "axamansard",
    "crusaderpensions",
    "fcmbpensions",
    "fidelitypension",
    "firstguaranteepension",
    "ieianchorpensions",
    "investmentone",
    "leadwaypension",
    "nlpcpfa",
    "npfpensions",
    "oakpensions",
    "palpensions",
    "premium",
    "radixpension",
    "sigmapensions",
    "stanbicpension",
    "trustfundpensions",
    "vgpensions",
  ]
  constructor(private pensionService: PensionService) { }
  pId
  ngOnInit(): void {
    this.pensionService.getPensionListener().subscribe((data:any)=>{
      this.pId = data.id
      this.form.setValue({
        provider:data.provider,
        fund1: data.fund1,
        fund2:data.fund2,
        fund3:data.fund3,
        fund4:data.fund4,
        date:`${new Date(data.fund_date).getMonth() +1} ${new Date(data.fund_date).getDate()}, ${new Date(data.fund_date).getUTCFullYear()} `,
      })
    })
    this.form = new FormGroup({
      provider: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      fund1: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      fund2: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      fund3: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      fund4: new FormControl(null, { validators: [Validators.required, Validators.minLength(3)] }),
      date: new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] })
    })
  }
  get f() { return this.form.controls; }
  onUpdate(){
    this.submit = true;
    if (this.form.invalid) {
      setTimeout(() => {
        this.submit = false
      }, 600);
    }
    const date = new Date(this.form.value.date)

    this.pensionService.updatePension(this.form.value.provider, this.form.value.fund1,
      this.form.value.fund2, this.form.value.fund3,
      this.form.value.fund4, date.getTime(), this.pId)
      this.submit = false
    this.form.reset()
  }

}
