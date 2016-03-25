import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { ShowMealDetailsComponent } from './show-meal-details.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';
import { HealthPipe } from './health.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthPipe],
  directives: [MealComponent, NewMealComponent, ShowMealDetailsComponent, EditMealDetailsComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="healthy">Show Healthy</option>
    <option value="unhealthy">Show Unhealthy</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | health:filterHealth"
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
  public filterHealth: string = "all";
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
  onChange(filterOption) {
  this.filterHealth = filterOption;
  }
}
