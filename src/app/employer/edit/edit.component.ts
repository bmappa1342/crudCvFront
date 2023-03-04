import { Component , OnInit} from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  tmp1:any;
  ut:any;
  employeur = new Employer();

  constructor(private employerService: EmployerService){}
  ngOnInit(): void {
    this.employeur.id = localStorage.getItem('employerID');
    this.employeur.nom = localStorage.getItem('employerName');
    this.employeur.prenom =  localStorage.getItem('employerPrenom');
    this.employeur.email  =  localStorage.getItem('employerEmail');
    this.employeur.specialite =  localStorage.getItem('employerSpecialite');
    this.employeur.age =     localStorage.getItem('employerAge');
    this.employeur.password =    localStorage.getItem('employerPassword');
    this.employeur.telephone =    localStorage.getItem('employerTelephone');
    this.employeur.niveauEetude =     localStorage.getItem('employerNetude');
    this.employeur.exppro =    localStorage.getItem('employerExPro');
    this.employeur.adresse =    localStorage.getItem('employerAdresse');
  }

  ModifierEmployer(){
    let empl = new Employer();

    empl.email = this.employeur.email;
    empl.password = this.employeur.password;
    empl.age = this.employeur.age;
    empl.adresse = this.employeur.adresse;
    empl.exppro = this.employeur.exppro;
    empl.niveauEetude = this.employeur.niveauEetude;
    empl.nom = this.employeur.nom;
    empl.prenom = this.employeur.prenom;
    empl.specialite = this.employeur.specialite;
    empl.telephone = this.employeur.telephone;
    empl.id = this.employeur.id;
  
    
    let t = this.employerService.update(empl);
    t.subscribe((data)=>this.ut=data);
    this.updateSession(empl);
    //this.employerService.get();


  }
  updateSession(empl:any){
    localStorage.setItem('employerID',empl.id);//employerID
    localStorage.setItem('employerName',empl.nom);
    localStorage.setItem('employerPrenom',empl.prenom);
    localStorage.setItem('employerEmail',empl.email);
    localStorage.setItem('employerSpecialite',empl.specialite);
    localStorage.setItem('employerAge',empl.age);
    localStorage.setItem('employerPassword',empl.password);
    localStorage.setItem('employerTelephone',empl.telephone);
    localStorage.setItem('employerNetude',empl.niveauEetude);
    localStorage.setItem('employerExPro',empl.exppro);
    localStorage.setItem('employerAdresse',empl.adresse);
  }
  formReset(){
    this.employeur.email = '';
    this.employeur.adresse = '';
    this.employeur.age = 0;
    this.employeur.adresse = '';
    this.employeur.exppro = '';
    this.employeur.niveauEetude = '';
    this.employeur.nom = '';
    this.employeur.prenom = '';
    this.employeur.specialite = '';
    this.employeur.telephone = '';
  }
}
