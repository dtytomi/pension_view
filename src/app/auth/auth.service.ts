import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventLoginError = new BehaviorSubject<any>('');
  eventLoginError$ = this.eventLoginError.asObservable()
  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  login(user) {
    this.afAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.router.navigate(['/list'])
      })
      .catch(err => {
        this.eventLoginError.next(err)
      })
  }
  getUserState() {
    return this.afAuth.authState
  }
  logout() {
    return this.afAuth.signOut();
  }
}
