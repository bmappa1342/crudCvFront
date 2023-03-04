import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employer } from './employer';
import {Router} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  API_URL = 'http://localhost:8082/employer';

  /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } */
  constructor(private http: HttpClient,private router: Router) { }

  public add(employer:any){
    // this.tabUtilservice.push(user);
    return this.http.post(this.API_URL, employer, 
     {responseType:'text' as 'json'});
 }
 public update(employer:any){
  // this.tabUtilservice.push(user);
  return this.http.put(this.API_URL+'/'+employer.id, employer, 
   {responseType:'text' as 'json'});
}
 public get(){
   return this.http.get(this.API_URL);
 }
 login(employer:any) {
  this.http.get<any>(this.API_URL)
  .subscribe(res=>{
    const employe = res.find((a:any)=>{
      if(a.email === employer.email && a.password === employer.password        ){
        localStorage.setItem('employerID',a.id);//employerID
        localStorage.setItem('employerName',a.nom);
        localStorage.setItem('employerPrenom',a.prenom);
        localStorage.setItem('employerEmail',a.email);
        localStorage.setItem('employerSpecialite',a.specialite);
        localStorage.setItem('employerAge',a.age);
        localStorage.setItem('employerPassword',a.password);
        localStorage.setItem('employerTelephone',a.telephone);
        localStorage.setItem('employerNetude',a.niveauEetude);
        localStorage.setItem('employerExPro',a.exppro);
        localStorage.setItem('employerAdresse',a.adresse);

        return true;
       }else{
        return false;
       }
    });
    if(employe){
      alert('login success');
      this.router.navigate(['/accueil'])
      }else{
        alert('incorect info');
        this.router.navigate(['/login'])

      }
  },err=>{
    alert('somethin wen wrong');
    this.router.navigate(['/login'])

  });}


  refresh(employer:any) { }

 /* 
 find(email:string): Observable<any> {
  console.log(this.API_URL+'/byemail/'+email);

  return this.http.get(this.API_URL + '/byemail/' + email)

  .pipe(
    catchError(this.errorHandler)
  )
}
getEmpB(emai: any){
  
  this.http.get(this.API_URL).pipe(
    filter((val: any) => {
      return val.email === emai;
    })
  )
  .subscribe(val => console.log(val));
}

find2(id:any): Observable<Employer> {
  return this.http.get<Employer>(this.API_URL + '/byemail/' + id)
  .pipe(
    catchError(this.errorHandler)
  )
}
errorHandler(error:any) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
 */  
}
