import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate {
    isAuth
    constructor(private authService: AuthService, public router: Router) {}
    canActivate(route: import('@angular/router').ActivatedRouteSnapshot,
                state: import('@angular/router')
    .RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router')
    .UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
        this.authService.getUserState().subscribe(user=>{
            // console.log(user)
            if (!user) {
                this.router.navigate(['/']);
            }
        })
        
        return true;
    }

}

