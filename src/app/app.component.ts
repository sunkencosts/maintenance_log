import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(public auth: AuthService, private router: Router) {}
  title = 'maintenance-log';
  public ngDestroyed$ = new Subject();

  ngOnInit(): void {
    this.auth.user$.pipe(takeUntil(this.ngDestroyed$)).subscribe((user) => {
      if (!user) {
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
      }
    });
  }

  ngOnDestroy(): void {
    this.ngDestroyed$.next();
  }
}
