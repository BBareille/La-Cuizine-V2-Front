import {Ingredient} from "./ingredient_types";

export interface Recipes {
    title: string;
    image?: string;
    prepTime: number;
    cookingTime: number;

    ingredientList: Ingredient;
    id: number;
}

export interface Recipe{
    title : string,
    image : string,
    description: string,
    prep_time: number | string,
    cooking_time: number | string,
    id: number,
}