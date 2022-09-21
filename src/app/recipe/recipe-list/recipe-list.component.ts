import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeServices } from '../recipe.services';
import {Recipe} from './recipe-model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Array<Recipe>=[];
  constructor(private recipeService:RecipeServices) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
  }
}
