import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material/material.module';
import { DoctorComponent } from './components/dashboard/doctor/doctor.component';
import { PatientComponent } from './components/dashboard/patient/patient.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AddDoctorComponent } from './components/dashboard/doctor/add-doctor/add-doctor.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SupportComponent } from './components/support/support.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './components/blog/blog.component';
// import { RegisterComponent } from './components/dashboard/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DoctorComponent,
    PatientComponent,
    SidebarComponent,
    AddDoctorComponent,
    SupportComponent,
    SchedulerComponent,
    LandingPageComponent,
    BlogComponent,
    // RegisterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatTableModule,
    ScheduleModule, RecurrenceEditorModule,
    HttpClientModule
    
        
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
