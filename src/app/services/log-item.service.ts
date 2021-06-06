import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { LogItem } from '../shared/log-item.model';

@Injectable({
  providedIn: 'root',
})
export class LogItemService {
  private LogItemsCollection: AngularFirestoreCollection<LogItem>;
  LogItems: Observable<LogItem[]>;
  constructor(private afs: AngularFirestore) {
    this.LogItemsCollection = afs.collection<LogItem>('LogItems');
    this.LogItems = this.LogItemsCollection.valueChanges();
  }

  add(item: LogItem) {
    this.LogItemsCollection.add(item);
  }
}
