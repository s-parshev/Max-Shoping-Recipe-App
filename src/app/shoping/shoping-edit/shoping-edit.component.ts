import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingServices } from '../shoping.services';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  constructor(private shopingServices:ShopingServices) { }

  ngOnInit(): void {
  }
  onAddNewIngredient(nameInput:HTMLInputElement, amountInput:HTMLInputElement){
    let ingridientArr:string[] = [];
    let tempIngredient = new Ingredient(nameInput.value, parseInt(amountInput.value));
    this.shopingServices.addIngredient(tempIngredient);

  }

}
