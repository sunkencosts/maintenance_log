import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatTableDataSource } from '@angular/material/table';
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
  dataSource = new MatTableDataSource<RepairItem>();
  columnsToDisplay: string[] = ['description', 'date', 'cost'];

  constructor(private itemService: RepairItemService) {
    this.itemService.repairItems.subscribe((items) => {
      this.dataSource = new MatTableDataSource([...items]);
    });
  }

  ngOnInit(): void {
    console.log(this.items);
  }
}
