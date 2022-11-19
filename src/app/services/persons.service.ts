import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  constructor(
    private http: HttpClient
  ) { }

  getPersons() {
    return this.http.get<any>('https://servicio.onrender.com/api/person/');
  }

  voteForPerson(id: number) {
    return this.http.patch<any>(`https://servicio.onrender.com/api/person/${id}`, null);
  }
}
