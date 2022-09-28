import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeServices } from '../recipe.services';
import {Recipe} from './recipe-model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Array<Recipe>=[];
  constructor(private recipeService:RecipeServices,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
  }
  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
