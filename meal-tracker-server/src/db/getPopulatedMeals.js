import { getMeals } from './getMeals';
import { getRecipes } from './getRecipes';

export const getPopulatedMeals = async () => {
    //first get the meals and recipes
    const meals = await getMeals();
    const recipes = await getRecipes();

    //loop through meals and populate each meal's recipe property with 
    //  their corresponding recipe
    // ...object -> get all the properties from an object
    const populatedMeals = meals.map(meal => ({
        ...meal,  //take all their properties
        //find and change to the recipe that matches the recipe and the meal
        recipe: recipes.find(recipe => recipe.id === meal.recipeID),
    }));

    return populatedMeals;
}