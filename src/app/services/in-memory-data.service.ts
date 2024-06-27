import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants: Restaurant[] = [
      { id: 1, name: 'Pizza Palace', description: 'Best pizza in town', location: 'New York' },
      { id: 2, name: 'Burger Bonanza', description: 'Delicious burgers', location: 'Los Angeles' }
    ];
    return { restaurants };
  }

  genId(restaurants: Restaurant[]): number {
    return restaurants.length > 0 ? Math.max(...restaurants.map(restaurant => restaurant.id || 0)) + 1 : 11;
  }
}