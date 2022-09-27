import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingServices } from '../shoping/shoping.services';
import { Recipe } from './recipe-list/recipe-model';
@Injectable() 
export class RecipeServices {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Array<Recipe> = [
    new Recipe(
      'Burger King',
      'Burger King (BK) is an American-based multinational chain of hamburger fast food restaurants. Headquartered in Miami-Dade County, Florida, the company was founded in 1953 as Insta-Burger King, a Jacksonville, Florida–based restaurant chain. ',
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg',
      [
        new Ingredient("Bread",2),
        new Ingredient("Meet",1),
      ]
    ),
    new Recipe(
      'Meatball',
      'Early recipes included in some of the earliest known Persian cookbooks generally feature seasoned lamb rolled into orange-sized balls and glazed with egg yolk and sometimes saffron. This method was taken to the West and is referred to as gilding.',
      'https://upload.wikimedia.org/wikipedia/commons/2/28/Gehaktballetjes.jpg',
      [
        new Ingredient("Green Herb",2),
        new Ingredient("Meet",1),
        new Ingredient("Bread",1)
      ]
    ),
    new Recipe(
      'Popara',
      'Popara (Cyrillic: попара, Greek: παπάρα, papara,[1] Turkish: papara[2]) is a dish made with bread. Typically the bread is old and has a thick crust, and is soaked in either hot tea, milk or water. Sugar, honey, butter, and cheese are often added. It is mostly made in Bulgaria, Greece, Serbia.',
      'https://upload.wikimedia.org/wikipedia/commons/4/4d/%D0%9F%D0%BE%D0%BF%D0%B0%D1%80%D0%B0_%28Popara%29.jpg',
      [
        new Ingredient("Bread",2),
        new Ingredient("Hot Water",1),
        new Ingredient("Chees",1),
        new Ingredient("Tomato",1),

      ]
    ),
  ];

  constructor(private shopingServices:ShopingServices){}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
    this.shopingServices.reciveIngredientsFromRecipe(ingredients)
  }
  getRecipe(index:number){
    return this.recipes[index];
  }
}
