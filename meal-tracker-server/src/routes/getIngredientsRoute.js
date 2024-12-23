import { getIngredients } from '../db';

export const getIngredientsRoute = {
    path: '/ingredients',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        const ingredients = await getIngredients();  //get the data
        res.status(200).json(ingredients);  //return the data to user
    }
}