import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { VoteComponent } from './components/vote/vote.component';
import { CanActivateByVoted } from './guards/CanActivateByVoted';

const routes: Routes = [
  {
    path: 'list', component: PersonsListComponent
  },
  {
    path: 'vote', component: VoteComponent, canActivate: [CanActivateByVoted]
  },
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
