import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: RecipeModel;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log(this.recipe)
  }

  addToShoppingList (recipe: RecipeModel) {
    this.recipeService.addIngredientsToShoppingList(recipe);
  }

}
