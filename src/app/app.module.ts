import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsListComponent } from './components/persons-list/persons-list.component';
import { VoteComponent } from './components/vote/vote.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/alert/alert.component';
import { CanActivateByVoted } from './guards/CanActivateByVoted';

@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    VoteComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    CanActivateByVoted
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
