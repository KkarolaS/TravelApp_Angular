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
  ],
  imports: [BrowserModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
