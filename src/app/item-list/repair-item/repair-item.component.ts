import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RepairItemService } from 'src/app/services/repair-item.service';

@Component({
  selector: 'app-repair-item',
  templateUrl: './repair-item.component.html',
  styleUrls: ['./repair-item.component.css'],
})
export class RepairItemComponent implements OnInit {
  itemForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private itemService: RepairItemService,
    private dialogRef: MatDialogRef<RepairItemComponent>
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      what: [''],
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
