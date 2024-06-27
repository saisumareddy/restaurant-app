import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full' },
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'restaurants/new', component: RestaurantFormComponent },
  { path: 'restaurants/edit/:id', component: RestaurantFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }