import { NgModule } from '@angular/core';
import { MomentModule } from 'ngx-moment';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ValuesPipe } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { environment } from './../environments/environment';
import { TableComponent } from './table/table.component';
import { FundDatePipe } from './table/table.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './admin/add/add.component';
import { EditComponent } from './admin/edit/edit.component';
import { ListComponent } from './admin/list/list.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { OrientationComponent } from './modal/orientation/orientation.component';




@NgModule({
	declarations: [
		AppComponent,
		FundDatePipe,
		HomeComponent,
		NavComponent,
		ValuesPipe,
		TableComponent,
		AdminComponent,
		AddComponent,
		EditComponent,
		ListComponent,
		LoginComponent,
		OrientationComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		JwtModule.forRoot({
			config: {
				whitelistedDomains: ['localhost:5000', 'http://52.150.38.40:5000'],
				blacklistedRoutes: ['http://localhost:5000/api/users/login',
					'http://52.150.38.40:5000/api/users/login'],
				throwNoTokenError: true
			}
		}),
		MatTabsModule,
		MatDividerModule,
		MatSliderModule,
		MatSelectModule,
		MatRadioModule,
		MatDatepickerModule,
		MatSnackBarModule,
		MatNativeDateModule,
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
		ToastrModule.forRoot(),
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
		{ provide: 'apiUrl', useValue: environment.API_URL },
		{provide: Window, useValue: window},
		AuthGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
