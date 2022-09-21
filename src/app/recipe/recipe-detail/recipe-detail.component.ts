import { Component, Input, OnInit } from '@angular/core';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToDisplay:any;
  
  constructor(private recipeServices:RecipeServices) { }

  ngOnInit(): void {
  }
  toShopingList(){
    this.recipeServices.addIngredientToShoppingList(this.recipeToDisplay.ingredients);
  }

}
