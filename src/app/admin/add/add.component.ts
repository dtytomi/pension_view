import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PensionService } from '../../_services';

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

  constructor( 
    private pensionService: PensionService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      provider: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      fund1: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      fund2: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      fund3: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      fund4: new FormControl(null,  [Validators.required, Validators.minLength(3)]),
      date: new FormControl({value: null, disabled: true},  [Validators.required, Validators.minLength(10)])
    });

  }

  get f() { return this.form.controls; }

  onCreate() {

    this.submit = true;

    if (this.form.invalid) {
      setTimeout(() => {
        this.submit = false
      }, 600);
    }
      
    this.pensionService.addPension(this.form.getRawValue())
      .subscribe((res: any) => {
        if (res)
          this.toastr.success('Added Successfully!');
      });

    this.submit = false
    this.form.reset()
  }

}
