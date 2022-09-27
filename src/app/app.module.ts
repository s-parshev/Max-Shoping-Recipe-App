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
import { RouterModule } from '@angular/router';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';

const appRoute=[
  // {path:'', redirectTo:'/recipe'},
  {path:'shoping', component:ShopingComponent},
  {path:'recipe', component:RecipeComponent, children:[
    {path:'', component: RecipeStartComponent},
    {path:':id', component:RecipeDetailComponent}
  ]},
]
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
    FontSize,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule
    RouterModule.forRoot(appRoute),
  ],
  providers: [ShopingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
