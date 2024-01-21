import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FliesComponent } from './flies/flies.component';
import { MapComponent } from './map/map.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { TravelsService } from './shared/travels.service';
import { TravelsListComponent } from './travels/travels-list/travels-list.component';
import { TravelDetailsComponent } from './travels/travel-details/travel-details.component';
import { TravelItemComponent } from './travels/travels-list/travel-item/travel-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TravelsComponent,
    ShoppingListComponent,
    FliesComponent,
    MapComponent,
    HeaderComponent,
    FooterComponent,
    TravelsListComponent,
    TravelDetailsComponent,
    TravelItemComponent,
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule, ReactiveFormsModule],
  providers: [TravelsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
