import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-edit">
  <h3>Edit this Meal: </h3>
  <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
  <input [(ngModel)]="meal.details" class="col-sm-8 input-lg meal-form"/>
  <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg meal-form"/>
  </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
