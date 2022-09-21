import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopingServices } from '../shoping.services';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shopingServices: ShopingServices) {}

  ngOnInit(): void {
    this.ingredients = this.shopingServices.getIngredient();
    this.shopingServices.ingredientSChange.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }

  // reciveIngredient(event: any) {
  //   console.log(typeof event[1]);
  //   let tempIngredientName = event[0];
  //   let tempIngredientAmount = event[1];
  //   this.ingredients.push(
  //     new Ingredient(tempIngredientName, tempIngredientAmount)
  //   );
  // }
}
