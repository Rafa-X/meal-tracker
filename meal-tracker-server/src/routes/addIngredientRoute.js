import { getIngredients, insertIngredient } from '../db';

export const addIngredientRoute = {
    path: '/ingredients',
    method: 'post',
    handler: async (req, res) => {
        //.body because the ingredient was passed as an object in the message body
        const ingredient = req.body;
        await insertIngredient(ingredient);  //insert into DB
        const updatedIngredients = await getIngredients(); //get the updated ingredients
        res.status(200).json(updatedIngredients);  //return the updated list in JSON format
    }
}