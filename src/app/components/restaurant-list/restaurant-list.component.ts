import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];
  displayedColumns: string[] = ['name', 'description', 'location', 'actions'];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.fetchRestaurants();
  }

  fetchRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(
      (data) => this.restaurants = data,
      (error) => console.error('Error fetching restaurants', error)
    );
  }

  deleteRestaurant(id: number): void {
    this.restaurantService.deleteRestaurant(id).subscribe(
      () => this.fetchRestaurants(),
      (error) => console.error('Error deleting restaurant', error)
    );
  }
}