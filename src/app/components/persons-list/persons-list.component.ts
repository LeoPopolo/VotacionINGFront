import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  persons: Array<Person> = [];

  constructor(
    private personsService: PersonsService
  ) { }

  ngOnInit(): void {
    this.getPersons();
    const id = setInterval(() => {
      this.getPersons();
    }, 3000);
  }

  getPersons() {
    this.personsService.getPersons().subscribe(data => {
      console.log(data);
      this.persons = data.data;
    });
  }

}
