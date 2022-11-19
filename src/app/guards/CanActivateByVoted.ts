import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanActivateByVoted implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    const voted = localStorage.getItem('voted');

    if (voted) {
      this.router.navigate(['/list']);
      return false;
    }

    return true;
  }
}
