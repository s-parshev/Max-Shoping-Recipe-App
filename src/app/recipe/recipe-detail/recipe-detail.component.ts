import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe-model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeToDisplay:any;
  constructor() { }

  ngOnInit(): void {
  }
  testMth(){
    console.log(this.recipeToDisplay.name)
  }

}
