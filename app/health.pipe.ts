import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "health",
  pure: false
})

export class HealthPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthState = args[0];
    if(desiredHealthState === "all") {
      return input;
    } else if (desiredHealthState === "healthy") {
      return input.filter((meal) => {
        return (meal.calories <= 300);
      });
    } else if (desiredHealthState === "unhealthy") {
      return input.filter((meal) => {
        return (meal.calories > 300);
      });
    } else {
      return input;
    }
  }
}
