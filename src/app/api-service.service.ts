import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { datamodel } from './entity/model';
import { Notes } from './entity/Notes';
import { Observable } from 'rxjs';
import { error } from 'console';
import { notStrictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  delete(note: Notes){
    throw new Error('Methode not implemented');

  }
  readonly URL = "http://localhost:8081/api/note"

  constructor(private httpClient:HttpClient) { }



  // add note
  addnote(note: Notes): Observable<Notes>{
    return this.httpClient.post<Notes>(this.URL,note);


  }

  getListeNotes():Observable<Notes[]>{
    return this.httpClient.get<Notes[]>(this.URL);
  }

  
   // get note
  getnote(){
    return this.httpClient.get<Notes[]>(this.URL);
  }

  //udpate
  updatenote(note:Notes, id:number){
    return this.httpClient.put<Notes>(this.URL,note);
  }


  //delete
  deletenote(id:number){
    return this.httpClient.delete<Notes>(this.URL);
  }

  
  
}
