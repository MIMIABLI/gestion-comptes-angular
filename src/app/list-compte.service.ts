import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { datamodel } from './entity/model';
import { HttpClient } from '@angular/common/http';
import { Comptes } from './entity/Compte';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ListCompteService {
  delete(compte: Comptes) {
    throw new Error('Method not implemented.');
  }
 
 readonly URL = "http://localhost:8080/api/compte";

  constructor(private httpClient: HttpClient) { }



  // add comptes
  addcompte(compte:Comptes): Observable<Comptes>{
    
    return this.httpClient.get<Comptes>(this.URL);


  }

  getListeComptes():Observable<Comptes[]>{
    return this.httpClient.get<Comptes[]>(this.URL);

  }
  
   // get compte
  getcompte(compte: Comptes):Observable<Comptes>{
    return this.httpClient.get<Comptes>(this.URL);
  }

  //delete
  deleteCompte(id:number):Observable<Comptes>{

    return this.httpClient.delete<Comptes>(this.URL);
  }
  

 
  //udpate
  update(compte: Comptes):Observable<Comptes>{
    return this.httpClient.put<Comptes>(`${this.URL}/${compte.id}`, compte);
  }
 



}

  

