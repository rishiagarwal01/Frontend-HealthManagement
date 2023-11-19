import { AfterViewInit, Component,Input,OnInit,ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material/material.module';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistrationService } from 'src/app/services/registeration.service';
import { Doctor } from 'src/app/models/doctor';

// export interface Doctor {
 

//   name : string ;
//     gender : string ;
//     dob : string ;
//     number : number ;
//     email : string ;
//     department : string ;
// }


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit  {

  // @Input() doctor: Doctor[];

  constructor(public dialog: MatDialog,private rs :RegistrationService) {}
  
  doctor: Doctor[] = [
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
  ngOnInit(): void {
    this.rs.getDoctor().subscribe({
      next:(doctor)=>{
        console.log(doctor);
        this.doctor=doctor;
      },
      error:(response)=>{
        console.log(response);
      }

    });
  }



  
  addDoctor() {
    // alert("Add Doctor called successfully");
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title: 'Register doctor',
      buttonName: 'Register'
    }

    const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);
  }

  editDoctor(pat:any){
    const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = pat ;
  dialogConfig.data.title='Edit Doctor';
  // dialogConfig.data.birthdate=pat.birthdate.toDate();
  dialogConfig.data.buttonName='Register(Edit)';

  const dialogRef = this.dialog.open(AddDoctorComponent, dialogConfig);
  
  // define the data variable and pass it to updateDoctor function
  const data = pat;
  this.rs.updateDoctor(data).subscribe({
    next:(doctor:any)=>{
      console.log(doctor);
      this.doctor=doctor;
    },
    error:(response)=>{
      console.log(response);
    }
  });

  }

  deleteDoctor(){

  }
}
