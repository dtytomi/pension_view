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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    ValuesPipe,
    TableComponent
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
    MatInputModule, MatPaginatorModule
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
    {provide: 'apiUrl', useValue: environment.API_URL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
