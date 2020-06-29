import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { AuthService } from '../_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  authError: any;
  form: any;
  submit = false;

  constructor( private formBuilder: FormBuilder, 
    public authService:AuthService, 
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.authService.eventLoginError$.subscribe(err=>{
      this.authError = null
      this.authError = err
      if (err){
        this.toastr.error(
          `<span data-notify="icon" class="nc-icon nc-bell-55"></span><span data-notify="message">${this.authError?.message}</span>`,
            "",
            {
              timeOut: 5000,
              enableHtml: true,
              closeButton: true,
              toastClass: "alert alert-danger alert-with-icon",
              positionClass: "toast-" + "top" + "-" + "right"
            }
          );

      }
    })

    this.form =this.formBuilder.group({
      username: new FormControl(null, [ Validators.required ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6) ]),
    });

  }

  get f() { return this.form.controls; }

  onLogin(){

    this.submit = true;

    if(this.form.invalid){

      setTimeout(() => {
        this.submit = false
      }, 600);

      return
    }

    this.authService.login(this.form.value)
        .subscribe(user => {
          if(user) 
            this.router.navigate(['/admin'])
        });
    
    this.submit = false;
  }

}
