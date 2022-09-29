import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe-list/recipe-model';
import { RecipeServices } from '../recipe.services';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('formSubmit') formSubmit!: NgForm;
  id!: number;
  editMode: boolean = false;
  recipeForm!: FormGroup;
  recipe!:Recipe;
  name!:string;
  imagePath!:string;
  description!:string;
  ingredientName!:string;
  ingredientAmount!:number;
  ingredients!:Ingredient[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServices
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
     
      this.initForm();
    });
  }
  private initForm() {
    if(this.editMode){
      this.recipe = this.recipeService.getRecipe(this.id)
      this.name = this.recipe.name;
      this.imagePath = this.recipe .imagePath;
      this.description = this.recipe.description;
      this.ingredientName = this.recipe.ingredients[this.id].name;
      this.ingredientAmount = this.recipe.ingredients[this.id].amount;
    }
  }
  onSaveItem(){
    this.recipe = this.recipeService.getRecipe(this.id)
    console.log(this.recipe);
  }
  onSubmit() {
  }
}
