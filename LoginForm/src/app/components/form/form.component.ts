import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateByEmail } from '../../validators/validateByEmail.validators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import { AxiosCallService } from '../../services/axios-call.service';
import { compileNgModule } from '@angular/compiler';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  api = inject(HttpClient)
  loginStatus:any
   f!: FormGroup
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private fb : FormBuilder,
    private apiCall:AxiosCallService,
    private router:Router
  ) {
    
  }
  
  ngOnInit(): void {
    this.f = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5),Validators.email,validateByEmail()]],
      password: ['', [Validators.required,Validators.minLength(4)]]
    })
    
  }

  get fc() {
    console.log(this.f.controls)
    return this.f.controls
  }

  async makeGetRequest(){
    try {
      const data = await this.apiCall.getData('http://localhost:5000/logout')
      console.log(data)
    }
    catch(error){
      console.log(error)
    }
  }

  async makePostRequest(){
    try{
      const payload = {
        userName:this.fc['userName'].value,
        password:this.fc['password'].value
      }
      const data = await this.apiCall.postData('http://localhost:5000/login',payload)
      this.loginStatus = data
      this.router.navigate(['/success'])
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
