import { deleteMeal, getPopulatedMeals } from '../db';

export const deleteMealRoute = {
    path: '/meals/:id',  //puts the id in the URL to identify the element
    method: 'delete',
    handler: async (req, res) => {
        const { id } = req.params; //get the id value from URL
        await deleteMeal(id);  //delete using the ID
        const updatedMeals = await getPopulatedMeals();  //get a list of the updated populated meals
        res.status(200).json(updatedMeals);  //send back the updated meals list
    }
}