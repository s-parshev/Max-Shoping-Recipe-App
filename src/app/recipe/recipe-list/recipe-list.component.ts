import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from './recipe-model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sendRecipeToRecipeComponent = new EventEmitter<Recipe>();
  recipes:Array<Recipe> =[
    new Recipe("test recipe 1","test 111","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("test recipe 2","test 222","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("test recipe 3","test 333","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg")
  ];
  constructor() { }

  ngOnInit(): void {
  }

  resendDataToParent(recipe:Recipe){
    this.sendRecipeToRecipeComponent.emit(recipe)
  }
}
