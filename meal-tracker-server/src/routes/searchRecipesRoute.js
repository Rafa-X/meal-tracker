export const searchRecipesRoute = {
    path: '/recipes',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        res.send('Getting Recipes');
    }
}