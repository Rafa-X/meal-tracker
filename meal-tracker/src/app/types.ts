export interface Ingredient {
    _id: string,
    name: string,
    amount: number,
    units: string,  //grams, kg...
}

export interface Recipe {
    _id: string,
    name: string,
    ingredients: Ingredient[],
    originalRecipeLink: string,  //for copyright reasons add this
}

export interface Meal {
    _id: string,
    recipe: Recipe,
    plannedDate: Date,
}

export interface MealRaw {
    _id: string,
    recipe: Recipe,
    plannedDate: string,
}