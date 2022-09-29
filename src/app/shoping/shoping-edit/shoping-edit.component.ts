import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopingServices } from '../shoping.services';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  editMode: boolean = false;
  editItemId!: number;
  editItem!: Ingredient;
  @ViewChild('formLocRef') ingredientForm!: NgForm;

  constructor(private shopingServices: ShopingServices) {}

  ngOnInit(): void {
    this.subscription = this.shopingServices.editing.subscribe((id: number) => {
      this.editMode = true;
      this.editItemId = id;
      this.editItem = this.shopingServices.getIngredientItem(id);
      this.ingredientForm.setValue({
        ingredientName: this.editItem.name,
        ingredientAmount: this.editItem.amount,
      });
    });
  }
  onAddNewIngredient(ingredient: Ingredient) {
    this.shopingServices.addIngredient(ingredient);
  }
  onSubmit() {
    let iName = this.ingredientForm.value.ingredientName;
    let iAmount = this.ingredientForm.value.ingredientAmount;
    let newIngredient = new Ingredient(iName, iAmount);
    if (!this.editMode) {
      this.onAddNewIngredient(newIngredient);
    } else {
      this.shopingServices.updateIngredient(this.editItemId, newIngredient);
    }
    this.editMode = false;
    this.ingredientForm.reset();
  }
  onDelete(){
    this.shopingServices.deleteIngredient(this.editItemId)
    this.onClear();

  }
  onClear(){
    this.ingredientForm.reset();
    this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
