import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'show-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-show">
    <h2>Meal Name: {{ meal.name }}</h2>
    <h5>Details: {{ meal.details }}</h5>
    <h5>Calories: {{ meal.calories }}</h5>
  </div>
  `
})

export class ShowMealDetailsComponent {
  public meal: Meal;
}
