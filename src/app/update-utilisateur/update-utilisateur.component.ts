import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { ApiServiceService } from '../api-service.service';
import { Subscription } from 'rxjs';
import { Utilisateur } from '../entity/Utilisateur';

@Component({
  selector: 'app-update-utilisateur',
  standalone: true,
  imports: [],
  templateUrl: './update-utilisateur.component.html',
  styleUrl: './update-utilisateur.component.css'
})
export class UpdateUtilisateurComponent {
  utilisateur!: Utilisateur[];
  utilisateursSubscription!: Subscription;
   
 
   constructor(private activateroute: ActivatedRoute, router: Router, private api: ApiServiceService){}
 
 
 
   ngOnInit(): void {
      // this.activateroute.paramMap.subscribe((param:Params)=>{
        // this.dataid=param['get']("id");
         //console.log("data id is", this.dataid
      // this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
     //this.note = data;
 
 
     //this.notesSubscription = this.note.addnote().subscribe((this.note)=>{
       //this.nomPlateformete = this.note
     
 
       }
 
 
 
       update(){
         this.utilisateur.update(this.utilisateur,this.dataid).subscribe((res:datamodel)=>{
          //this.router.navigate(["/"])
         
       })
      }
       


}
