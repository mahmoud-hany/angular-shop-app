import { EventEmitter, Injectable } from '@angular/core';

import { RecipeModel } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

// recipe service class
@Injectable() // this mean we can inject[use] another service in this service
export class RecipeService {
    recipeSelected = new EventEmitter<RecipeModel>();

    // we can access the recipes array directly because of the private keyword
    private recipes: RecipeModel[] = [
        new RecipeModel(
            `Frying pan pizza`,
            `FIRST Weigh the ingredients for the dogh into a large bowl and add 1/2 tsp
            salt and 125ml warm water. Mix to form a soft dough, then tip
            onto your work surface ` ,
            `https://nit.pt/wp-content/uploads/2017/09/03022507099b18557cb6d8baaaaee876.jpg`,
            [
                new Ingredient('Hot Dog', 3),
                new Ingredient('cheese', 1),
                new Ingredient('vegtables', 5)
            ]),
                 
        new RecipeModel(
            `Super Sprim Burger `,
            `SECOND Weigh the ingredients for the dogh into a large bowl and add 1/2 tsp
            salt and 125ml warm water. Mix to form a soft dough, then tip
            onto your work surface `,
            `https://amp.businessinsider.com/images/5a7dc169d03072af008b4bf2-750-562.jpg`,
            [
                new Ingredient('Meat', 3),
                new Ingredient('cheese', 1),
                new Ingredient('vegtables', 5),
                new Ingredient('Bread', 2)
            ])
    ];

    constructor( private shoppingListService: ShoppingListService) { }

    // method to get recipe array
    getRecipe () {
        return this.recipes.slice(); // return copy of recipe array 
    }

    addIngredientsToShoppingList(recipe: RecipeModel) {
        this.shoppingListService.addIngredients(recipe.ingredients);
    }
}