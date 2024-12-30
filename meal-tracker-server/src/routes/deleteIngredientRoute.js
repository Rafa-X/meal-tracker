import { deleteIngredient, getIngredients } from '../db';

export const deleteIngredientRoute = {
    method: 'delete',
    path: '/ingredients/:name',  //puts the name in the URL to identify the element
    handler: async (req, res) => {
        const { name } = req.params;
        await deleteIngredient(name);
        const updatedIngredients = await getIngredients();
        res.status(200).json(updatedIngredients);
    }
}