import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FliesComponent } from './flies/flies.component';
import { MapComponent } from './map/map.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'travels', component: TravelsComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'flies', component: FliesComponent },
  { path: 'maps', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
