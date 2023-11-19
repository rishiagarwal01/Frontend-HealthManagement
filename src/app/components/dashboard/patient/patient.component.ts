import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RegistrationService } from 'src/app/services/registeration.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit{
  patient: User[] = [
    // {
    //   name : 'Demo1',
    //   gender :  'male',
    //   dob:'2023-12-29',
    //   number :  12345,
    //   email : 'demo1@gmail.com',
      
    // },
    // {
    //   name : 'Demo2',
    //   gender :  'male',
    //   dob:'2021-12-1',
    //   number :  9000,
    //   email : 'demo2@gmail.com',
    // },
    // {
    //   name : 'Demo3',
    //   gender :  'male',
    //   dob:'2023-2-9',
    //   number :  54213,
    //   email : 'demo3@gmail.com',
    // },
    // {
    //   name : 'Demo4',
    //   gender :  'female',
    //   dob:'2023-1-12',
    //   number :  45,
    //   email : 'demo4@gmail.com',
    // }
  ];
  
  constructor(private rs: RegistrationService) {

  }
  ngOnInit(): void {
      this.rs.getPatient().subscribe({
        next:(patient)=>{
          console.log(patient);
          this.patient=patient;
        },
        error:(response)=>{
          console.log(response);
        }

      });
      
  }
}
