import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  API_URL = 'http://localhost:3000/offres';

  constructor(private http: HttpClient) { }
  public get(){
    return this.http.get(this.API_URL);
  }
}
