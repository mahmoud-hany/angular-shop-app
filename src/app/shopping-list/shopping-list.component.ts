import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[]; 
  
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    // update ingredients array
    this.ingredients = this.shoppingListService.getIngredients();
    // console.log(this.ingredients);

    // detect changes when it happen
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredient: Ingredient[]) => {
        this.ingredients = ingredient;
      }
    )
  }

}
