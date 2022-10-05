import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
} from '@angular/forms';
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
  recipe!: Recipe;
  name!: string;
  imagePath!: string;
  description!: string;
  ingredientName!: string;
  ingredientAmount!: number;
  ingredients!: Ingredient[];

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServices,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  newIngredientCtrl(ing: any) {
    return this.fb.group({
      name: new FormControl(ing.name),
      amount: new FormControl(ing.amount),
    });
  }
  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients: any = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingredients']) {
        for (let i of recipe.ingredients) {
          recipeIngredients.push(this.newIngredientCtrl(i));
        }
      }
      this.recipeForm = new FormGroup({
        name: new FormControl(recipeName),
        description: new FormControl(recipeDescription),
        imagePath: new FormControl(recipeImagePath),
        ingredients: recipeIngredients,
      });
    }
  }
  onSaveItem() {
    this.recipe = this.recipeService.getRecipe(this.id);
    console.log(this.recipe);
  }
  onAddIngredients() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl(),
      })
    );
  }
  onSubmit() {
  }
}
