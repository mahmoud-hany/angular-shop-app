import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(`Frying pan pizza`, 
      `Weigh the ingredients for the dough into a large bowl and add 1/2 tsp 
      salt and 125ml warm water. Mix to form a soft dough, then tip 
      onto your work surface ` , 
      `https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/frying-pan-pizza.jpg`),
      
    new RecipeModel(`Frying pan pizza`, 
      `Weigh the ingredients for the dough into a large bowl and add 1/2 tsp 
      salt and 125ml warm water. Mix to form a soft dough, then tip 
      onto your work surface ` , 
      `https://www.bbcgoodfood.com/sites/default/files/recipe/recipe-image/2016/09/frying-pan-pizza.jpg`)
  ];

  constructor() { }

  ngOnInit() {
  }

}
