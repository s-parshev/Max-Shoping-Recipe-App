import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe-model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe?:Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  reciveRecipeFromRecipeList(recipe:Recipe){
    console.log(" recipe from recipeComponent " ,recipe )
    this.recipe = recipe;
  }

}
