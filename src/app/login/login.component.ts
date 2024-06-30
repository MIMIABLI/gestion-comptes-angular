import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Comptes } from '../entity/Compte';

@Component({
standalone:true,
  selector: 'login',
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements LoginComponent {
formLogin!: FormGroup;
  
  

  constructor(private formBuilder: FormBuilder, private router: Router){}

 ngOnInit(): void{
  

this.initForm();

 }
 initForm() {
  this.formLogin = this.formBuilder.group({
    email:['',Validators.required],
    password:['',Validators.required],
  })
 }

 seConnecter(){
  if(this.formLogin.valid){
    AuthService.login(this.formLogin.get('email')?.value,this.formLogin.get('password')?.value).subscribe( 
      (compte: Comptes) =>{
        console.log(compte);
        this.router.navigate([ 'listcomptes']);
      }
    )
    

    
  }
  
   
  
  
  
 }
}




 