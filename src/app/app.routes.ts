import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { ListeNotesComponent } from './liste-notes/liste-notes.component';
import { HttpClientModule } from '@angular/common/http';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { UpdateComponent } from './update/update.component';



export const routes: Routes = [
    {path:'', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'signup',component: SignupComponent},
    {path: 'listnotes', component: ListeNotesComponent},
    {path: 'listcomptes', component: ListCompteComponent},
    {path: 'update', component: UpdateComponent},
    {path: '', redirectTo:'list',pathMatch:'full'}
    
  ];
