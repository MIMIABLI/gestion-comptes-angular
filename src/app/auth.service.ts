import { Injectable } from '@angular/core';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { HttpClient } from '@angular/common/http';
import { Router } from 'express';
import { Comptes } from './entity/Compte';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private utilisateur?: ListCompteComponent = undefined;
  readonly URL = "http://localhost:8081/api/note";
  static login: any;
  

  constructor(private httpClient: HttpClient, private router: Router) { }

login(username: string, password:string): Observable<Comptes>{
  return this.httpClient.post<Comptes>(URL + "/utilisateur/login", { "username": username, "password": password });

  
}
//logout(){
 // this.utilisateur = undefined;
  //this.router.navigate(["/"]);
//}

//islogged(): boolean {
  //return this.utilisateur != undefined;
//}


//isGestionnnaire(): boolean{
 // if(this.utilisateur?.gestionnaire){
   // return this.utilisateur.gestionnaire;
 // }
  //return false;
//}

getUtilisateur(){
  if(this.utilisateur){
    return this.utilisateur;
  }
  return undefined;
}



}
