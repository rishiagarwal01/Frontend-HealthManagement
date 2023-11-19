// import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from '../../helpers/validationform';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registeration.service';
import { Userlist } from 'src/app/models/userlist';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  signuplist:Userlist[]=[];
  public signUpForm!: FormGroup;
  type: string = 'password';
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash"
  constructor(private fb : FormBuilder, private router: Router,private rs:RegistrationService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      userName:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      role:['', Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = 'fa-eye' : this.eyeIcon = 'fa-eye-slash'
    this.isText ? this.type = 'text' : this.type = 'password'
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      let signUpObj = {
        ...this.signUpForm.value,
        role:'',
        token:''
      }
      // this.auth.signUp(signUpObj)
      // .subscribe({
      //   next:(res=>{
      //     console.log(res.message);
      //     this.signUpForm.reset();
      //     this.router.navigate(['login']);
      //     alert(res.message)
      //   }),
      //   error:(err=>{
      //     alert(err?.error.message)
      //   })
      // })
    } else {
      ValidateForm.validateAllFormFields(this.signUpForm); 
    }}

    signup() {
      this.rs.postUser(this.signUpForm.value).subscribe(
        (response:any) => {
          // handle success response
          console.log(response);
          alert("Sign Up Successfully Done!")
          this.signUpForm.reset();
          // window.location.reload();
        },
        (error:any) => {
          // handle error response
          console.error(error);
        }
      );
    }
  }
