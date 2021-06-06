import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { LogItemService } from 'src/app/services/log-item.service';
import { LogItem } from 'src/app/shared/log-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit, AfterViewInit {
  items: Observable<LogItem[]>;
  dataSource = new MatTableDataSource<LogItem>();
  columnsToDisplay: string[] = ['date', 'service', 'cost'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private itemService: LogItemService) {
    this.itemService.LogItems.subscribe((items) => {
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
