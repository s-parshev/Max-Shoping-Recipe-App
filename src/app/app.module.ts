import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopingComponent } from './shoping/shoping.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { ShopingListComponent } from './shoping/shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping/shoping-edit/shoping-edit.component';
import { DropdownDirective } from './directive/dropdown.directive';
import { FontSize } from './directive/fontsize.directive';
import { ShopingServices } from './shoping/shoping.services';

@NgModule({
  declarations: [
    AppComponent,
    ShopingComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective,
    FontSize
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShopingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
