import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { MatNativeDateModule, MatSnackBarModule, MatIconModule, MatDialogModule, 
  MatButtonModule, MatTableModule, MatPaginatorModule, MatSortModule, 
  MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, 
  MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';
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
    MatNativeDateModule, 
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
    MatSelectModule, MatRadioModule, MatNativeDateModule, 
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
