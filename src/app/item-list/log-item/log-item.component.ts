import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LogItemService } from 'src/app/services/log-item.service';

@Component({
  selector: 'app-log-item',
  templateUrl: './log-item.component.html',
  styleUrls: ['./log-item.component.css'],
})
export class LogItemComponent implements OnInit {
  itemForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private itemService: LogItemService,
    private dialogRef: MatDialogRef<LogItemComponent>
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      service: [''],
      kms: ['', Validators.pattern('[0-9]+')],
      details: [''],
      cost: [''],
      date: [new Date()],
      serviceProvider: [''],
    });
  }
  onSubmit() {
    this.itemService.add(this.itemForm.value);
    this.dialogRef.close();
  }
}
