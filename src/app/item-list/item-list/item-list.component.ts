import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RepairItemService } from 'src/app/services/repair-item.service';
import { RepairItem } from 'src/app/shared/repair-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Observable<RepairItem[]>;
  constructor(private itemService: RepairItemService) {
    this.items = this.itemService.repairItems;
  }

  ngOnInit(): void {
    console.log(this.items);
  }

  onClick() {
    this.itemService.add({ name: 'Ben', cost: '100', date: null });
  }
}
