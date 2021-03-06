import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="jumbotron">
      <h1>Meal Tracker</h1>
    </div>
      <div class="container">
      <meal-list
        [mealList]="meals"
        (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Cheeseburger", "Low Fat!", 435),
      new Meal("Pizza", "Healthiest Pizza Ever!", 543),
      new Meal("Ice Cream", "This diet's going great!", 345),
      new Meal("Lard", "I admit... I may have digressed.", 856)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
  }
}
