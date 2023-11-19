// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Doctor } from 'src/app/models/doctor';
// import { User } from 'src/app/models/user';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   user = new User();
//   doctor = new Doctor();
//   msg = ' ';

//   constructor(private _registrationService: RegistrationService, private _doctorService: DoctorService, private _router: Router) { }

//   ngOnInit(): void {
   
//   }

//   registerUser() {
//     this._registrationService.registerUserFromRemote(this.user).subscribe(
//       data => {
//         console.log("Registration Success");
//         sessionStorage.setItem("username", this.user.username);
//         sessionStorage.setItem("gender", this.user.gender);
//         this._router.navigate(['/registrationsuccess']);
//       },
//       error => {
//         console.log("Registration Failed");
//         console.log(error.error);
//         this.msg = "User with " + this.user.email + " already exists !!!";
//       }
//     )
//   }

//   registerDoctor() {
//     this._registrationService.registerDoctorFromRemote(this.doctor).subscribe(
//       data => {
//         console.log("Registration Success");
//         sessionStorage.setItem("doctorname", this.doctor.doctorname);
//         sessionStorage.setItem("gender", this.doctor.gender);
//         this._router.navigate(['/registrationsuccess']);
//       },
//       error => {
//         console.log("Registration Failed");
//         console.log(error.error);
//         this.msg = "Doctor with " + this.user.email + " already exists !!!";
//       }
//     )
//   }

// }

