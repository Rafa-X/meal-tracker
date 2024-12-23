import { getPopulatedMeals } from '../db';

export const getMealsRoute = {
    path: '/meals',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        const meals = await getPopulatedMeals();
        res.status(200).json(meals);
    }
}