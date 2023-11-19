import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material/material/material.module';
import { MatTableModule } from '@angular/material/table';
import { RegistrationService } from 'src/app/services/registeration.service';
import { Doctor } from 'src/app/models/doctor';
import { HttpClient } from '@angular/common/http';


// export interface Doctor {
//   id: string;
//   name: string;
//   mobile: string;
//   email: string;
//   gender: string;
//   department: string;
//   birthdate: Date;
//   qualification: string;


@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  form !: FormGroup;
  title !: string;
  name !: string;
  mobile !: string;
  email !: string;
  gender !: string;
  department !: string;
  birthdate !: Date;
  qualification !: string;
  id !: string;
  buttonName !: string;

  departments: string[] = ['Orthopedics', 'Cardiology', 'Otorhinolaryngology', 'Ophthalmology', 'Psychiatry', 'Internal medicine', 'Radiology', 'Surgery', 'Pediatrics', 'Neurology', 'Urology', 'Anesthesiology', 'Nephrology', 'Neurosurgery', 'Gastroenterology', 'Pulmonology', 'General surgery', 'Intensive care medicine', 'Oncology', 'Pathology', 'Emergency medicine', 'Neonatology', 'Hematology', 'Pharmacy', 'Physical medicine and rehabilitation', 'Vascular surgery', 'Geriatrics', 'Gynaecology', 'Cardiac surgery', 'Outpatient department', 'Nuclear medicine', 'Infectious diseases', 'Clinical pathology', 'Intensive care unit', 'operating room', 'Casualty department']

  doctorList: Doctor[] = [];



  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<AddDoctorComponent>,
    private http:HttpClient,
    private rs:RegistrationService
  ) {
    this.title = data.title;
    this.id = data.id;
    this.name = data.name;
    this.mobile = data.mobile;
    this.email = data.email;
    this.gender = data.gender;
    this.department = data.department;
    this.birthdate = data.birthdate;
    this.qualification = data.qualification;
    this.buttonName = data.buttonName;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.id, []],
      name: [this.name, [Validators.required]],
      mobile: [this.mobile, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      email: [this.email, [Validators.required, Validators.email]],
      gender: [this.gender, [Validators.required]],
      department: [this.department, [Validators.required]],
      birthdate: [this.birthdate, [Validators.required]],
      qualification: [this.qualification, [Validators.required]]
    })
  }

  cancelRegistration() {
    this.dialogRef.close();
  }

  // registerDoctor() {
  //   this.dialogRef.close(this.form.value);
  //   this.doctorList.push(this.form.value);
  //   console.log(this.form.value);

    // registerDoctor() {
    //   this.postDoctor(this.form.value).subscribe((res:any) => {
    //     // handle success response
    //   }, (error:any) => {
    //     // handle error response
    //   });
    // }
  
    registerDoctor() {
      this.rs.postDoctor(this.form.value).subscribe(
        (response:any) => {
          // handle success response
          console.log(response);
          this.form.reset();
          window.location.reload();
        },
        (error:any) => {
          // handle error response
          console.error(error);
        }
      );
    }

  

}