import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { datamodel } from '../entity/model';
import { ListCompteComponent } from '../list-compte/list-compte.component';
import { Subscription } from 'rxjs';
import { NotExpr, identifierName } from '@angular/compiler';
import { ListeNotesComponent } from '../liste-notes/liste-notes.component';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
  //public dataid!: number;
 // public note:undefined|datamodel;
 note!: ListeNotesComponent[];
 notesSubscription!: Subscription;
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
        this.compte.updatenote(this.note,this.dataid).subscribe((res:datamodel)=>{
         //this.router.navigate(["/"])
        
      })
    }
  dataid(note: ListeNotesComponent[], dataid: any) {
    throw new Error('Method not implemented.');
  }
      
    
    }

 
  
