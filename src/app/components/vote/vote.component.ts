import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Person } from '../../models/person.model';
import { PersonsService } from '../../services/persons.service';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.scss']
})
export class VoteComponent implements OnInit {

  persons: Array<Person> = [];

  constructor(
    private personsService: PersonsService,
    private router: Router,
    private dialog: MatDialog
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

  vote(person: Person) {

    const voted = localStorage.getItem('voted');

    if (voted) {
      this.openAlert('Ya votaste :(', 'error');
      this.router.navigate(['list']);
      return;
    }

    this.personsService.voteForPerson(person.id).subscribe(() => {
      this.openAlert('¡Ya votaste! Mira los resultados en tiempo real', 'success');
      localStorage.setItem('voted', 'true');
      this.router.navigate(['list']);
    });
  }

  openAlert(message: string, status: 'error' | 'success') {

    this.dialog.open(AlertComponent, {
      width: '100%',
      data: {
        message: message,
        status: status
      }
    });
  }
}
