import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogItemComponent } from '../item-list/log-item/log-item.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  newItemDialog() {
    this.dialog.open(LogItemComponent);
  }
}
