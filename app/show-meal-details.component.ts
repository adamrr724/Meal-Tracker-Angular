import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'show-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-show">
    <h3>Meal Name: {{ meal.name }}</h3>
    <h6>Details: {{ meal.details }}</h6>
    <h6>Calories: {{ meal.calories }}</h6>
  </div>
  `
})

export class ShowMealDetailsComponent {
  public meal: Meal;
}
