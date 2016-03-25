import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { ShowMealDetailsComponent } from './show-meal-details.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent, NewMealComponent, ShowMealDetailsComponent, EditMealDetailsComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList"
  (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal"
  [meal]="currentMeal">
  </meal-display>
  <show-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </show-meal-details>
  <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
  </edit-meal-details>
  <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
  this.selectedMeal = clickedMeal;
  this.onMealSelect.emit(clickedMeal);
  }
  createMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(newMeal.name, newMeal.details, newMeal.calories)
    );
  }
}
