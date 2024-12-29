import { getPopulatedMeals, insertMeal } from '../db';

export const addMealRoute = {
    path: '/meals',
    method: 'post',
    handler: async (req, res) => {
        const { date, recipeID } = req.body;  //parameters from the arriving request
        const newMeal = {
            recipeID,
            plannedDate: date,
        };  //create a new Meal with the ID and date retrieved

        await insertMeal(newMeal);  //insert the new meal into DB
        const updatedMeals = await getPopulatedMeals();  //get meals after insertion
        res.status(200).json(updatedMeals);  //return success message and meals list
    }
}