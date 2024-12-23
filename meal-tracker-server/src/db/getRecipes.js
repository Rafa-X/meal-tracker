import { db } from './db';

export const getRecipes = async () => {
    //find all the elements and convert to array, needed when obtaining many items
    return await db.getConnection()
                .collection('recipes')
                .find({})
                .toArray();
}