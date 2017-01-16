import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidateCreateComponent } from './candidate/candidate-create/candidate-create.component';
import { CandidateUpdateComponent } from './candidate/candidate-update/candidate-update.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ActivateComponent } from './authentication/activate/activate.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path : 'home', component : HomeComponent },
    { path : 'candidates', component : CandidateListComponent },
    { path : 'candidate/create', component : CandidateCreateComponent },
    { path : 'candidate/update/:id', component : CandidateUpdateComponent },
    { path : 'register', component : RegisterComponent },
    { path : 'activate/:token', component : ActivateComponent },
    { path : 'login', component : LoginComponent },
    { path : 'dashboard', component : DashboardComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}