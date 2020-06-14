import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValuesPipe } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { environment } from './../environments/environment';
import { TableComponent } from './table/table.component';
import { ControlComponent } from './admin/control/control.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListComponent } from './admin/list/list.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ValuesPipe,
    TableComponent,
    ControlComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    LoginComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule, 
    MatDividerModule, 
    MatSliderModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatSnackBarModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }), 
    MatIconModule, 
    MatDialogModule, 
    MatProgressSpinnerModule, 
    MatButtonModule, MatSortModule, 
    MatTableModule, MatTabsModule, 
    MatCheckboxModule, MatToolbarModule, 
    MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, 
    MatInputModule, MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    MatTabsModule, MatDividerModule, MatSliderModule, 
    MatSelectModule, MatRadioModule,
    MatDatepickerModule, MatSnackBarModule, MatIconModule, 
    MatDialogModule, MatProgressSpinnerModule, MatButtonModule, 
    MatSortModule, MatCheckboxModule, MatToolbarModule, MatCardModule, 
    MatTableModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule, 
    MatInputModule, MatPaginatorModule
  ],
  providers: [
    {provide: 'apiUrl', useValue: environment.API_URL},
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
