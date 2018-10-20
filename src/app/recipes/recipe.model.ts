import { Ingredient } from "../shared/ingredient.model";

export class RecipeModel {

    // public name: string;
    // public description: string;
    // public imagePath: string;
    // public ingredients: Ingredients[];

    // constructor(name: string, desc: string, imagePath: string, ingredients: Ingredients[]) {
    //     this.name = name;
    //     this.description = desc;
    //     this.imagePath = imagePath;
    //     this.ingredients = ingredients;
    // }

    constructor(
        public name: string, 
        public description: string, 
        public imagePath: string,
        public ingredients: Ingredient[]
    ) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}