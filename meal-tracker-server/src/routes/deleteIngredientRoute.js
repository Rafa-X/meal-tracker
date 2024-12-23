import { deleteIngredient, getIngredients } from '../db';

export const deleteIngredientRoute = {
    method: 'delete',
    path: '/ingredients/:name',  //puts the name in the URL to identify the element
    /*
    handler: async (req, res) => {
        
        const { name } = req.params;  //get the name from the URL parameter
        console.log(req.params);
        await deleteIngredient(name); //delete using the helper function
        const updatedIngredients = await getIngredients();  //ingredients to be send back
        res.status(200).json(updatedIngredients);  //send back the updated list to the user
    },*/

    handler: async (req, res) => {
    try{
        console.log('Entra a ruta')
        const { name } = req.params; //get the name from the URL parameter 
        console.log(name); 
        const result = await deleteIngredient(name);  //delete using the helper function 

        if (result.deletedCount === 0) { 
            return res.status(404).send('Ingredient not found'); 
        } 

        const updatedIngredients = await getIngredients(); //ingredients to be send back 
        res.status(200).json(updatedIngredients); //send back the updated list to the user 

        } catch (error) { 
            console.error(error); 
            res.status(500).send('Internal Server Error'); 
        }
    }
}