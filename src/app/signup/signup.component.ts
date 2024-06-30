
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../entity/Utilisateur';
import { UtilsateurService } from '../utilsateur.service';
import { ApiServiceService } from '../api-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  utilisateur!: Utilisateur;
  public signupForm!: FormGroup;

 constructor(private formBuilder: FormBuilder, private router: Router, private utilisateurService: UtilsateurService, private apiserviceService: ApiServiceService){}
 

 ngOnInit(): void{
  this.signupForm = this.formBuilder.group({

  name: ['',Validators.required],
  prenom:['',Validators.required],
  email:['',Validators.required],
  password:['',Validators.required],
  dateBirth:['', Validators.required],

  })
  
 }
 signup(){

  if(this.signupForm.valid){

  //creation d'un utilisateur

  this.utilisateur={
    id:0,
    dateBirth:new Date,
    dateInscription: new Date,
    email: this.signupForm.get('email')?.value,
    name:this.signupForm.get('name')?.value,
    password:this.signupForm.get('password')?.value,

  }

  this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(value=>{
    console.log(value);
    
  })
 
}
    alert("signup successfull")
    this.signupForm.reset();
    this.router.navigate(['login'])


}

}




