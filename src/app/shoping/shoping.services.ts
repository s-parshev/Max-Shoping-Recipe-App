import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
export class ShopingServices {
  ingredientSChange = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatos', 15),
  ];

  addingIngredient = new EventEmitter<Ingredient>();

  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientSChange.next(this.ingredients.slice());
  }
  reciveIngredientsFromRecipe(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientSChange.next(this.ingredients.slice());

  }
}
