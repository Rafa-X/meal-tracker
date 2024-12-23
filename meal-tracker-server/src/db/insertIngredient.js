import { db } from './db';

export const insertIngredient = async (ingredient) => {
    const connection = db.getConnection();
    //use the connection to insert the ingredient into DB
    await connection.collection('ingredients').insertOne(ingredient);
}