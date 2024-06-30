import { Injectable } from '@angular/core';
import { Utilisateur } from './entity/Utilisateur';
import { Observable } from 'rxjs';
import { environment } from './entity/environement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UtilsateurService {
  
 
  readonly URL = "http://localhost:8081/api/utilisateur"
 
 
private utilisateur: Array<Utilisateur> = new Array<Utilisateur>();

  constructor(private httpClient: HttpClient) { }


  // add utilisateur
  addUtilisateur(utilisateur: Utilisateur): Observable<Utilisateur>{
    return this.httpClient.post<Utilisateur>(this.URL,utilisateur);

   }

   getListUtilisateurs():Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(this.URL);
   }

   //get utilisateur
   getUtilisateur(utilisateur: Utilisateur){
    return this.httpClient.get<Utilisateur>(this.URL);
   }

   updateUtilisateur(utilisateur: Utilisateur, id:number){
    return this.httpClient.put<Utilisateur>(this.URL,utilisateur);
   }

   deleteUtilisateur(id: number){
    return this.httpClient.delete<Utilisateur>(this.URL);
   }
  


}


  