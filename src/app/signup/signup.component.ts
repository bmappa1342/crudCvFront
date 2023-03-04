import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from '../employer/employer';
import { EmployerService } from '../employer/employer.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css',
  '../../assets/ressources/vendor/bootstrap/css/bootstrap.min.css',
  '../../assets/ressources/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  '../../assets/ressources/vendor/animate/animate.css',
  '../../assets/ressources/vendor/css-hamburgers/hamburgers.min.css',
  '../../assets/ressources/vendor/select2/select2.min.css',
  '../../assets/ressources/css/util.css',
  '../../assets/ressources/css/main.css'
]
})
export class SignupComponent implements OnInit {
  employer = new Employer();
  emp:any;
  constructor(private service: EmployerService,private router: Router){}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login']);
  }

  ajout(){
    let v = new Employer();
    v.nom = this.employer.nom;
    v.prenom = this.employer.prenom;
    v.age = this.employer.age;
    v.specialite = this.employer.specialite;
    v.email = this.employer.email;
    v.password = this.employer.password;
    v.telephone = this.employer.telephone;
    v.niveauEetude = this.employer.niveauEetude;
    v.exppro = this.employer.exppro;
    v.adresse = this.employer.adresse;

    this.service.add(v).subscribe((data)=>this.emp=data);
    
   this.employer.nom = '';
   this.employer.prenom = '';
   this.employer.age=0;
   this.employer.specialite = '';
  this.employer.email='';
   this.employer.password='';
  this.employer.telephone='';
  this.employer.niveauEetude='';
  this.employer.exppro='';
  this.employer.adresse='';
    this.router.navigate(['/login']);

    console.log(v);
    
  }
}
