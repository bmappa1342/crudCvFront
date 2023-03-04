import { Component, OnInit } from '@angular/core';
import { OffreService } from '../offre.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit{
  offres:any;
  constructor(private service:OffreService){}
  ngOnInit(): void {
    this.service.get().subscribe(data=>{this.offres=data});

    console.log(this.offres);

  }

}
