import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item-list/item-list/item-list.component';
import { LogItemComponent } from './item-list/log-item/log-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleComponent } from './vehicle-list/vehicle/vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemListComponent,
    LogItemComponent,
    HomeComponent,
    VehicleListComponent,
    VehicleComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
