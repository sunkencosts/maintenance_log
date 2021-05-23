import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RepairItem } from '../shared/repair-item.model';

@Injectable({
  providedIn: 'root',
})
export class RepairItemService {
  private repairItemsCollection: AngularFirestoreCollection<RepairItem>;
  repairItems: Observable<RepairItem[]>;
  constructor(private afs: AngularFirestore) {
    this.repairItemsCollection = afs.collection<RepairItem>('repairItems');
    this.repairItems = this.repairItemsCollection.valueChanges();
  }

  add(item: RepairItem) {
    this.repairItemsCollection.add(item);
  }
}
