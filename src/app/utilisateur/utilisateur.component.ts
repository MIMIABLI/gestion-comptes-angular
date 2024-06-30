import { Component } from '@angular/core';
import { UtilsateurService } from '../utilsateur.service';
import { Utilisateur } from '../entity/Utilisateur';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-utilisateur',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './utilisateur.component.html',
  styleUrl: './utilisateur.component.css'
})
export class UtilisateurComponent {

utilisateurform!:FormGroup;
  listUtilisateur: Utilisateur[] = [];
  utilisateur!: Utilisateur;


constructor(private utilisateurService: UtilsateurService, private formBuilder: FormBuilder){

}

ngOnInit(): void{
  this.utilisateurform= this.formBuilder.group({
    id: ['', Validators.required],
    name:['', Validators.required],
    dateBirth:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    date:['', Validators.required], 
  })
}

list(){
  return this.listUtilisateur;
}

add(){
  if(this.utilisateurform.valid){
    this.utilisateur={
      name:this.utilisateurform?.get('name')?.value,
      dateBirth:this.utilisateurform?.get('dateBirth')?.value,
      email:this.utilisateurform?.get('email')?.value,
      password:this.utilisateurform?.get('password')?.value,
      dateInscription:this.utilisateurform?.get('dateInscription')?.value,
      id:1

    }
    this.utilisateurService.addUtilisateur(this.utilisateur).subscribe(value=>{

    })

  }
}

getUtilisateur(){
  this.utilisateurService.getUtilisateur(this.utilisateur).subscribe((values )=>{
    console.log(values);
  })
}


edit(){
  this.utilisateurService.getListUtilisateurs().subscribe();
    
  }
  update(){
    if(this.utilisateur){
      this.utilisateurService.updateUtilisateur(this.utilisateur, this.utilisateur.id).subscribe((value)=>{
        console.log(value);
      })
    }
  }

  
delete(){
  this.utilisateurService.deleteUtilisateur(this.utilisateur.id);
}


}










