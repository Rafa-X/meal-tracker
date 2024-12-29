import { getIngredients, getPopulatedMeals } from '../db';

//starting value for the condensed objects
const emptyIngredients = {count: 0, pounds: 0, cups: 0, tablespoons: 0, teaspoons: 0};

//convert the user ingredients from objects array -> JSON object
    //acc -> accumulated value
    //i -> ingredient (used as key for the JSON object)
    //insert each ingredient as a key and its quantities as the value
    //lower case the names to avoid unmatches for the typo
const condenseIngredients = ingredients => 
    ingredients.reduce((acc, i) => ({
        ...acc,
        [i.name.toLowerCase()]: acc[i.name.toLowerCase()]  //check if there is already an entry for the ingredient
            ? { ...acc[i.name.toLowerCase()], [i.units]: acc[i.name.toLowerCase()][i.units] + i.amount }  //it have
            : { ...emptyIngredients, [i.units]: i.amount },  //it have not
    }), {});  //ends with {} to specify the initial value is an empty object

//figures out what ingredients are missing from the planned meals recipes and the owned ones
    //will use the JSON key-value format to differentiate them
    //acc -> accumulated value
    //name -> name of ingredients
    ///... -> check all the items next to
const getMissingIngredients = (required, owned) =>
    Object.keys(required).reduce((acc, name) => ({
        ...acc,  //for each accumulated value
        [name]: Object.keys(required[name]).reduce((unitAmounts, unit) => ({
            //if the required is >= don't add to the list
            ...unitAmounts,  //for each ingredient type measure
            //compares if the required exists, !0 = misses,  0 = owns
            [unit]: Math.max(required[name][unit] - ((owned[name] || {}) [unit] || 0), 0)
        }), {})
    }), {});

//take the missing ingredients and return the keys and how many of them are missing
const getShoppingList = (missingIngredients) =>
    //for each ingredient filter the ones whose amount required > 0
    Object.keys(missingIngredients).map(name =>
        name + ':' + Object.keys(missingIngredients[name])
        .filter(unit => missingIngredients[name][unit] > 0)  //get the missings
        //for each unit get the amount required and insert into a string
        .map(unit => `${missingIngredients[name][unit]} ${unit}`)
        .join( '+' )
    );

export const getShoppingListRoute = {
    path: '/shopping-list',  //puts the id in the URL to identify the element
    method: 'get',
    handler: async (req, res) => {
        //get the date to work with
        const ingredients = await getIngredients();
        const populatedMeals = await getPopulatedMeals();

        //filter the meals that planned date is for today or further
        const futureMeals = populatedMeals.filter(meal => {
            const mealDate = new Date(meal.plannedDate);
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            return mealDate > yesterday;
        });

        //get all the ingredients properties off of the populatedMeals filtered by date
        const requiredIngredients = futureMeals.flatMap(meal => meal.recipe.ingredients);
        //format to JSON the required ingredients 
        const condensedMealIngredients = condenseIngredients(requiredIngredients);
        //format to JSON the ingredients stored in the database
        const condensedUserIngredients = condenseIngredients(ingredients);

        //compares the required and owned ingredients to filter the missing ones and amounts
        const missingIngredients = getMissingIngredients(
            condensedMealIngredients,
            condensedUserIngredients
        );

        //calculate the shopping list
        const shoppingList = getShoppingList(missingIngredients);
        res.status(200).json(shoppingList);
    }
}