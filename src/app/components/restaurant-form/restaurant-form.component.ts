import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/restaurant.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})
export class RestaurantFormComponent implements OnInit {

  restaurantForm: FormGroup;
  restaurantId?: number;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.restaurantForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.restaurantId = +params['id'];
        this.restaurantService.getRestaurant(this.restaurantId).subscribe(
          (data) => this.restaurantForm.patchValue(data),
          (error) => console.error('Error fetching restaurant', error)
        );
      }
    });
  }

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const restaurant: Restaurant = this.restaurantForm.value;
      if (this.restaurantId) {
        this.restaurantService.updateRestaurant(this.restaurantId, restaurant).subscribe(
          () => this.router.navigate(['/restaurants']),
          (error) => console.error('Error updating restaurant', error)
        );
      } else {
        this.restaurantService.addRestaurant(restaurant).subscribe(
          () => this.router.navigate(['/restaurants']),
          (error) => console.error('Error adding restaurant', error)
        );
      }
    }
  }

  getErrorMessage(controlName: string): string {
    const control = this.restaurantForm.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }
}