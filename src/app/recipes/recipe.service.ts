import { RecipeModel } from './recipe.model';

// recipe service class
export class RecipeService {
    
    private recipes: RecipeModel[] = [
        new RecipeModel(`Frying pan pizza`,
          `Weigh the ingredients for the dogh into a large bowl and add 1/2 tsp
          salt and 125ml warm water. Mix to form a soft dough, then tip
          onto your work surface ` ,
          `https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/frying-pan-pizza.jpg`),
       
        new RecipeModel(`Frying pan pizza`,
          `Weigh the ingredients for the dogh into a large bowl and add 1/2 tsp
          salt and 125ml warm water. Mix to form a soft dough, then tip
          onto your work surface ` ,
          `https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/frying-pan-pizza.jpg`)
    ];

    // method to get recipe array
    getRecipe () {
        return this.recipes.slice(); // return copy of recipe array 
    }
}