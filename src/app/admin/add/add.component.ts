import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PensionService } from 'src/app/pension.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
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

  ngOnInit(): void {
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
  onCreate() {
    this.submit = true;
    if (this.form.invalid) {
      setTimeout(() => {
        this.submit = false
      }, 600);
    }
    const date = new Date(this.form.value.date)

    this.pensionService.addPension(this.form.value.provider, this.form.value.fund1,
      this.form.value.fund2, this.form.value.fund3,
      this.form.value.fund4, date.getTime())
    this.submit = false
    this.form.reset()
  }



}
