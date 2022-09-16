import { Component, OnInit } from '@angular/core';
import {Ingredient }from '../../shared/ingredient.model';
@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] =[
    new Ingredient("Apples",5),
    new Ingredient("Potatos",15)
  ]; 
  constructor() { }

  ngOnInit(): void {
  }


  reciveIngredient(event:any){
    console.log(typeof(event[1]));
    let tempIngredientName = event[0];
    let tempIngredientAmount = event[1];
    this.ingredients.push(new Ingredient(tempIngredientName, tempIngredientAmount));
  }
}
