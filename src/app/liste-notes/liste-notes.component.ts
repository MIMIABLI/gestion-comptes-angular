import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { datamodel } from '../entity/model';
import { Notes } from '../entity/Notes';
import { log } from 'console';

@Component({
  selector: 'app-liste-notes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-notes.component.html',
  styleUrl: './liste-notes.component.css'
})
export class ListeNotesComponent implements OnInit {
  notes: Notes[]  = [];
  noteform!:FormGroup;
  note!:Notes;
  apiService: any;
 
 constructor(private formbuilder: FormBuilder, private api:ApiServiceService){}
 
   
  ngOnInit(): void {
    this.noteform= this.formbuilder.group({
      note:['', Validators.required],
      nom:['', Validators.required],
      dateAjout:['', Validators.required],
      dateModification:['', Validators.required],
      contenu:['', Validators.required],
      description:['', Validators.required],
    })
     
  }

  
  addNotes(){

    if(this.noteform.valid){
  
    //creation d'une note
      this.note={
        id:0,
        note:this.noteform.get('note')?.value,
        dateAjout:this.noteform.get('dateAjout')?.value,
        dateModification:this.noteform.get('dateModification')?.value,
        contenu:this.noteform.get('contnu')?.value,
        description:this.noteform.get('description')?.value,
        idUtilisateur:0,
      }

      
      this.api.addnote(this.note).subscribe(value=>{
        console.log(value);
        
      })
     
    }

    }
  //get note
  getnote(){
   this.apiService.Service.getnote(this.note).subscribe((values:Notes)=>{
    console.log(values);
   })
   }

   editnote(){
    this.apiService.getListeNotes().subscribe();
   }

   update(){
    if(this.note){
      this.apiService.update(this.note).subscribe(() =>{
        this.load();
      })
    }
   }
  load() {
   
  }

  delete(){
    this.apiService.delete(this.note);
  }

  }




