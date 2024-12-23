import { db } from './db';
import { ObjectId } from 'mongodb';  //constructor to change a STRING into a MONGODB STRING

export const deleteMeal = async (mealID) => {
    //this way cutts out the extra var for the connection
    await db.getConnection()
    .collection('meals')
    .deleteOne({ _id: ObjectId(mealID) });  //to convert wrap in a ObjectId()
}