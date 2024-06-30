import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comptes } from '../entity/Compte';
import { Subscription } from 'rxjs';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-update-compte',
  standalone: true,
  imports: [],
  templateUrl: './update-compte.component.html',
  styleUrl: './update-compte.component.css'
})
export class UpdateCompteComponent implements OnInit {
  compte!: ListeCmoptes[];
  comptesSubscription!: Subscription;
   compte: any;
 
 
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
         this.compte.update(this.compte,this.dataid).subscribe((res:datamodel)=>{
          //this.router.navigate(["/"])
         
       })
     }
   dataid(note: UpdateCompteComponent[], dataid: any) {
     throw new Error('Method not implemented.');
   }
       


  

}
