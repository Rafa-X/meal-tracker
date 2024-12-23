export const addMealRoute = {
    path: '/meals',
    method: 'post',
    handler: async (req, res) => {
        res.send('Adding Meal');
    }
}