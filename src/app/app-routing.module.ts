import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './employer/add/add.component';
import { EditComponent } from './employer/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { ListeComponent } from './offres/liste/liste.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'accueil', component: DashboardComponent,
  children: [
    {
      path: 'edit', // child route path
      component: EditComponent, // child route component that the router renders
    },
    {
      path: 'add',
      component: AddComponent // another child route component that the router renders
    },
    {
      path: 'offres',
      component: ListeComponent // another child route component that the router renders
    }
    ]
  },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
