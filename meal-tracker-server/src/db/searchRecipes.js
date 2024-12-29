import { db } from '../db';

//returns all the recipes that matches the "searchString" text
export const searchRecipes = async (searchString) => {
    const meals = db.getConnection()
        .collection('recipes')
        .find({ $text: { $search: searchString } })  //text search syntax
        .toArray();
    return meals;
}