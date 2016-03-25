import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    <div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Cheeseburger", "Low Fat!", 435),
      new Meal("Pizza", "Healthiest Pizza Ever", 543),
      new Meal("Ice Cream", "This diet's going great!", 345),
      new Meal("Lard", "I have digressed.", 856)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
