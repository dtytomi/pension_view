import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { firestore } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})

export class PensionService {
  private pensionUpdated = new Subject<{}>();
  pension;
  constructor(private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string,
    private firestore: AngularFirestore, private router: Router) { }

  getPensions() {
    const PensionObs: Observable<unknown> = this.http.get(`${this.apiUrl}pensions`).pipe(
      mergeMap((flaskdata: any) => {
        return this.getFPensions().pipe(
          map((fdata: any) => {
            console.log(flaskdata)
            const backend = flaskdata.pensions
            const fire = fdata.pension
            const list = []
            for (let data of fire) {
              const found = backend.find(x=> x.provider === data.provider)
              if(found === undefined){
                  if(list.includes(data)){
                    continue;
                  }
                list.push(data)
              }
            }
            return backend.concat(list) 
          })
        )

      })
    )
    return PensionObs
  }

  getReturns1() {
    return this.http.get(`${this.apiUrl}returns/1`);
  }

  getReturns2() {
    return this.http.get(`${this.apiUrl}returns/2`);
  }

  getReturns3() {
    return this.http.get(`${this.apiUrl}returns/3`);
  }

  getReturns4() {
    return this.http.get(`${this.apiUrl}returns/4`);
  }

  getInception1() {
    return this.http.get(`${this.apiUrl}inception/1`);
  }

  getInception2() {
    return this.http.get(`${this.apiUrl}inception/2`);
  }

  getInception3() {
    return this.http.get(`${this.apiUrl}inception/3`);
  }

  getInception4() {
    return this.http.get(`${this.apiUrl}inception/4`);
  }
  addPension(provider: string, fund1: number, fund2: number, fund3: number, fund4: string, date: number) {
    const adPension = {
      provider: provider, fund1: fund1, fund2: fund2, fund3: fund3,
      fund4: fund4, fund_date: date, date: firestore.FieldValue.serverTimestamp()
    }
    this.firestore.collection('pensions').add(adPension)
  }
  updatePension(provider: string, fund1: number, fund2: number, fund3: number, fund4: string, date: number, id) {
    const adPension = {
      provider: provider, fund1: fund1, fund2: fund2, fund3: fund3,
      fund4: fund4, fund_date: date, date: firestore.FieldValue.serverTimestamp()
    }
    this.firestore.doc('pensions/' + id).update(adPension)
  }

  getFPensions() {
    return this.firestore.collection('pensions', ref => ref.orderBy("date", "desc")).snapshotChanges().pipe(map((data: any) => {
      return {
        pension: data.map(res => {
          console.log(res)
          return {
            id: res.payload.doc.id,
            provider: res.payload.doc.data().provider,
            fund1: res.payload.doc.data().fund1,
            fund2: res.payload.doc.data().fund2,
            fund3: res.payload.doc.data().fund3,
            fund4: res.payload.doc.data().fund4,
            fund_date: res.payload.doc.data().fund_date,
            date: res.payload.doc.data().date?.seconds * 1000


          };
        })
      };
    }))
  }
  deletePension(id) {
    this.firestore.collection('pensions').doc(id).delete()
  }
  getFpension(id) {
    this.firestore.collection('pensions').doc(id).get().subscribe((res: any) => {
      console.log(res)
      this.pension = {
        id: res.id,
        provider: res.data().provider,
        fund1: res.data().fund1,
        fund2: res.data().fund2,
        fund3: res.data().fund3,
        fund4: res.data().fund4,
        fund_date: res.data().fund_date,
        date: res.data().date?.seconds * 1000

      };
      this.pensionUpdated.next(this.pension)
    })
  }
  getPensionListener() {
    return this.pensionUpdated.asObservable()
  }

}