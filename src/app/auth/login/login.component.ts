import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError;
  form;
  submit = false;
  constructor(private formBuilder: FormBuilder, public authService:AuthService, private toastr: ToastrService) { }

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
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(6)]}),
    })
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
    this.submit = false
  }

}
