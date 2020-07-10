import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PensionService } from '../../_services';
import { PROVIDERS } from '../../_models';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  form: FormGroup
  submit = false;

  providers = PROVIDERS;

  constructor( 
    private pensionService: PensionService 
  ) { }

  
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

  onUpdate(){
    this.submit = true;
    if (this.form.invalid) {
      setTimeout(() => {
        this.submit = false
      }, 600);
    }

    const date = new Date(this.form.value.date)

    this.pensionService.updatePension(this.form.value)
    this.submit = false
    this.form.reset()
  }

}
