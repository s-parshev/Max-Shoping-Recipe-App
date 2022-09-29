import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
export class ShopingServices {
  ingredientSChange = new Subject<Ingredient[]>();
  editing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Potatos', 15),
  ];

  // addingIngredient = new EventEmitter<Ingredient>();

  updateIngredient(id:number, newIngredient:Ingredient){
    this.ingredients[id] = newIngredient;
    this.ingredientSChange.next(this.ingredients.slice())
  }
  getIngredientItem(id:number){
    return this.ingredients[id];
  }
  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientSChange.next(this.ingredients.slice());
  }
  deleteIngredient(id:number){
    this.ingredients.splice(id,1);
    this.ingredientSChange.next(this.ingredients.slice())
  }
  reciveIngredientsFromRecipe(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientSChange.next(this.ingredients.slice());

  }
}
