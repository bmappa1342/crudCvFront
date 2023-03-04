import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Employer } from '../employer/employer';
import { EmployerService } from '../employer/employer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../assets/ressources/vendor/bootstrap/css/bootstrap.min.css',
  '../../assets/ressources/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
  '../../assets/ressources/vendor/animate/animate.css',
  '../../assets/ressources/vendor/css-hamburgers/hamburgers.min.css',
  '../../assets/ressources/vendor/select2/select2.min.css',
  '../../assets/ressources/css/util.css',
  '../../assets/ressources/css/main.css'
]
})
export class LoginComponent implements OnInit{
  employeur = new Employer();

  constructor(private service: EmployerService, private router: Router){}
  ngOnInit(): void {}
  
  connexion(){
    this.service.login(this.employeur);     
  }
  signup(){
    this.router.navigate(['/signup']);
  }


}
