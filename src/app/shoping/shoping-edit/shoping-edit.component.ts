import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingServices } from '../shoping.services';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('formLocRef') ingredientForm!: NgForm;
  constructor(private shopingServices: ShopingServices) {}

  ngOnInit(): void {}
  onAddNewIngredient(nameInput: string, amountInput: string) {
    let ingridientArr: string[] = [];
    let tempIngredient = new Ingredient(nameInput, parseInt(amountInput));
    this.shopingServices.addIngredient(tempIngredient);
  }
  onSubmit() {
    console.log(this.ingredientForm);
    this.onAddNewIngredient(
      this.ingredientForm.value.ingredientName,
      this.ingredientForm.value.ingredientAmount
    );
  }
}
