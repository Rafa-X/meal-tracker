export const getShoppingListRoute = {
    path: '/shopping-list',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        res.send('Getting Shppping List');
    }
}