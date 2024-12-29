import { searchRecipes } from '../db';

export const searchRecipesRoute = {
    path: '/recipes',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        //get the const from the query params instead of the body req (Express way)
        const searchString = req.query.search;
        //get result from the helper function
        const results = await searchRecipes(searchString);
        res.status(200).json(results)
    }
}