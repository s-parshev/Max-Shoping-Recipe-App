import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe-model';
import { RecipeServices } from './recipe.services';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeServices],
})
export class RecipeComponent implements OnInit {
  // recipe?: Recipe;
  constructor() {}

  ngOnInit(): void {
    // this.recipeServices.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.recipe = recipe;
    // });
  }
}
