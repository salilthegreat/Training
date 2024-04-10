import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateByEmail } from '../../validators/validateByEmail.validators';
import { AxiosCallService } from '../../services/axios-call.service';
import { Router } from '@angular/router';
import { ToggleDirective } from '../../directive/toggle.directive';

interface LoginStatus{
  Authorized:boolean,
  role:'admin' | 'member'
}


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,ToggleDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  loginStatus!: LoginStatus
   formGroup!: FormGroup
   role?:string
  constructor(
    private formBuilder : FormBuilder,
    private apiCall:AxiosCallService,
    private router:Router
  ) {
    
  }
  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(5),Validators.email,validateByEmail()]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    })
    
  }

  get formControls() {
    // console.log(this.formGroup.controls)
    return this.formGroup.controls
  }


  async makePostRequest(){
    try{
      const payload = {
        userName:this.formControls['userName'].value,
        password:this.formControls['password'].value
      }
      const data = await this.apiCall.postData('http://localhost:5000/login',payload)
      this.loginStatus = data
      if(this.loginStatus.Authorized){
        this.router.navigate(['/success'])
        localStorage.setItem('role',this.loginStatus.role)
      } else{
        this.router.navigate(['/error'])
      }
    }
    catch(error:any){
      this.loginStatus = error.response.data
      this.router.navigate(['/error'])
      console.log(this.loginStatus)
    }
  }

  onSubmit() {
    this.makePostRequest()
  }
}
