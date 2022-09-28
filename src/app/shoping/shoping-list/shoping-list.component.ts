import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShopingServices } from '../shoping.services';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private isChangeSub!:Subscription;
  constructor(private shopingServices: ShopingServices) {}

  ngOnInit(): void {
    this.ingredients = this.shopingServices.getIngredient();
    this.isChangeSub = this.shopingServices.ingredientSChange.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    );
  }
  ngOnDestroy(): void {
    this.isChangeSub.unsubscribe();
  }
}
