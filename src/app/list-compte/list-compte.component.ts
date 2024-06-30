import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { datamodel } from '../entity/model';
import { ListCompteService } from '../list-compte.service';
import { response } from 'express';
import { Notes } from '../entity/Notes';
import { Comptes } from '../entity/Compte';
import { log } from 'console';
import { __values } from 'tslib';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-compte',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-compte.component.html',
  styleUrl: './list-compte.component.css'
})
export class ListCompteComponent implements OnInit{
  compteform!: FormGroup;
 compte!:Comptes;
 listCompte:Comptes[] = [];
  static listCompte: any;
  constructor(private formbuilder: FormBuilder, private listCompteservice:ListCompteService){}


  ngOnInit(): void {
      this.compteform= this.formbuilder.group({
        nomPlateforme:['', Validators.required],
        description:['', Validators.required],
        dateAjout:['', Validators.required],
        dateMiseAJour:['', Validators.required],
        nomUtilisateur:['', Validators.required],
        adresse:['', Validators.required],
        motPasse:['', Validators.required],
      })
  }

  list() {
    return this.compte;
  }



  addCompte(){
    //console.log(data)
    if(this.compteform.valid){
      this.compte={
        adressUrl:this.compteform.get('adresse')?.value,
        dateUpdate:this.compteform.get('dateMiseajour')?.value,
        description:this.compteform.get('description')?.value,
        dateAdded:this.compteform.get('dateAjout')?.value,
        motPrimaire:this.compteform.get('motPasse')?.value,
        platformname:this.compteform.get('nom')?.value,
        password:this.compteform.get('motPasse')?.value,
        userName:this.compteform.get('nomUtilisateur')?.value,
        id:1,
        email:this.compteform.get('email')?.value,
        //utilisateur:{}

      }

      this.listCompteservice.addcompte(this.compte).subscribe(value=>{
        console.log(value);
        
      })
    }
   

  }

  
    getcompte(){
      this.listCompteservice.getcompte(this.compte).subscribe(values=>{
        console.log(values);
      })
 }

 editcompte(){
  this.listCompteservice.getListeComptes().subscribe();
 }

 
update(){
  if(this.compte){
    this.listCompteservice.update(this.compte).subscribe(rep =>{
      this.load();
    })
  }
}
  load() {
    
  }
  delete(){
    this.listCompteservice.delete(this.compte);
      
  
  }



cancel() {
  

   
    }
 
   

  }
