import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="row col-xs-10 addnew">
    <h3>Create a New Meal!</h3>
    <input placeholder="Name" class="col-sm-10 input-lg" #newName>
    <input placeholder="Details" class="col-sm-10 input-lg" #newDetails>
    <input type="number" placeholder="Calories" class="col-sm-10 input-lg" #newCalories><br>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    var newMeal: Meal = new Meal(userName.value, userDetails.value, userCalories.valueAsNumber);
    this.onSubmitNewMeal.emit(newMeal);
    newMeal.value = "";
  }
}
