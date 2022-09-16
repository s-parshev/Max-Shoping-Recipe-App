import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {

  @Output() emitIngredient = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddNewIngredient(nameInput:HTMLInputElement, amountInput:HTMLInputElement){
    let ingridientArr:string[] = [];
    ingridientArr.push(nameInput.value);
    ingridientArr.push(amountInput.value);
    this.emitIngredient.emit(ingridientArr);

  }

}
