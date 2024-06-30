import { Utilisateur } from "./Utilisateur";

export interface Comptes {
      id: number;
      
      platformname: String;
      
      description: String;
      
      dateAdded: Date;
      
      dateUpdate: Date;
      
      userName: String;
      
      email: String;
      
      adressUrl: String;
      
      password:  String;
      
      motPrimaire:  String;

   // utilisateur: Utilisateur; 
}
    