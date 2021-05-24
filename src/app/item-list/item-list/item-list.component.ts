import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { RepairItemService } from 'src/app/services/repair-item.service';
import { RepairItem } from 'src/app/shared/repair-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit, AfterViewInit {
  items: Observable<RepairItem[]>;
  dataSource = new MatTableDataSource<RepairItem>();
  columnsToDisplay: string[] = ['date', 'what', 'cost'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private itemService: RepairItemService) {
    this.itemService.repairItems.subscribe((items) => {
      this.dataSource = new MatTableDataSource([...items]);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
    console.log(this.items);
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
