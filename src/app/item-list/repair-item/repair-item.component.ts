import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private itemService: RepairItemService
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      description: [''],
      cost: [''],
      date: [null],
    });
  }
  onSubmit() {
    this.itemService.add(this.itemForm.value);
  }
}
