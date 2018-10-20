import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    // to change the copy of our array
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    // prevent access directly to array 
    private ingredients: Ingredient[] = [
        new Ingredient('Appels', 5),
        new Ingredient('Tomatoes', 4)
    ];

    constructor () {}

    getIngredients () {
        // return this.ingredients;
        return this.ingredients.slice(); // return a copy from the array
    }

    addIngredient (ing: Ingredient) {
        this.ingredients.push(ing);
        
        this.ingredientsChanged.emit(this.ingredients.slice());        
    }

    addIngredients (ings: Ingredient[]) {
        // first Solution
        // for (let ing of ings) {
        //     this.addIngredient(ing);
        // }

        //second Solution
        this.ingredients.push(...ings); // conver an array of elements to a list of elements

    }
}

