import { Component, OnInit } from '@angular/core';
import { Employer } from '../employer';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  employeur = new Employer();
  employer = new Employer();

  ut: any;
  tmp: any;
  listeEmployeur: any;
  email!: string;

  constructor(private employerService: EmployerService){}
  ngOnInit(): void {   
    this.employer.nom = localStorage.getItem('employerName');
    this.employer.prenom =  localStorage.getItem('employerPrenom');
    this.employer.email  =  localStorage.getItem('employerEmail');
    this.employer.specialite =  localStorage.getItem('employerSpecialite');
    this.employer.age =     localStorage.getItem('employerAge');
    this.employer.password =    localStorage.getItem('employerPassword');
    this.employer.telephone =    localStorage.getItem('employerTelephone');
    this.employer.niveauEetude =     localStorage.getItem('employerNetude');
    this.employer.exppro =    localStorage.getItem('employerExPro');
    this.employer.adresse =    localStorage.getItem('employerAdresse');
  
  }
 //this.employerService.get().subscribe((data)=>this.ut=data);

  ajouterEmployer(){
    let empl = new Employer();

    empl.email = this.employeur.email;
    empl.password = this.employeur.adresse;
    empl.age = this.employeur.age;
    empl.adresse = this.employeur.adresse;
    empl.exppro = this.employeur.exppro;
    empl.niveauEetude = this.employeur.niveauEetude;
    empl.nom = this.employeur.nom;
    empl.prenom = this.employeur.prenom;
    empl.specialite = this.employeur.specialite;
    empl.telephone = this.employeur.telephone;
  
    let t = this.employerService.add(empl);
    t.subscribe((data)=>this.ut=data);
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
    //this.employerService.get();


  }

}


