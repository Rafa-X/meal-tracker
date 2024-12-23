import { db } from './db';

//get the connection to db and wait until is done to delete the element using the ID
export const deleteIngredient = async (ingredientName) => {
    const connection = db.getConnection();
    await connection.collection('ingredients').deleteOne({ name: ingredientName });
}