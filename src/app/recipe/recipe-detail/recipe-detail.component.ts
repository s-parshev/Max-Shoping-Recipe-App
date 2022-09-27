import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToDisplay: any;
  id!: number;

  constructor(
    private recipeServices: RecipeServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipeToDisplay = this.recipeServices.getRecipe(this.id)
    });
  }
  toShopingList() {
    this.recipeServices.addIngredientToShoppingList(
      this.recipeToDisplay.ingredients
    );
  }
}
