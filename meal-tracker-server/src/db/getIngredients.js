import { db } from './db';

export const getIngredients = async () => {
    //find all the elements and convert to array, needed when obtaining many items
    return await db.getConnection()
                .collection('ingredients')
                .find({})
                .toArray();
}