import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PatientComponent } from './components/dashboard/patient/patient.component';
import { DoctorComponent } from './components/dashboard/doctor/doctor.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { SupportComponent } from './components/support/support.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BlogComponent } from './components/blog/blog.component';
import { AuthGuard } from './auth-guard/auth-guard';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'signup',
    component: SignupComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'dashboard',
    component: SidebarComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'dashboard', children:
      [
        { path: '', redirectTo: 'patient', pathMatch: 'full' },
        { path: 'patient', component: PatientComponent },
        { path: 'doctor', component: DoctorComponent },
        // {
        //   path: 'register',
        //   component: RegisterComponent
        // }
      ]
  },
  {
    path:'blog',
    component:BlogComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'support',
    component: SupportComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: 'scheduler',
    component: SchedulerComponent,
    // canActivate:[AuthGuard]
  },
  {
    path: '**',
    component: LandingPageComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'home',
    component:LandingPageComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
