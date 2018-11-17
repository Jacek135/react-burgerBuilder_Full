import * as actionTypes from '../actions/actionTypes'
import {updateObject} from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    becon: 0.7
};

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            const updatedIngredient = {[action.ingredientName]: state.ingredients[action.ingredientName] + 1};
            const ipdatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: ipdatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedState);
        case actionTypes.REMOVE_INGREDIENT:
            const updatedIng = {[action.ingredientName]: state.ingredients[action.ingredientName] - 1};
            const ipdatedIngs = updateObject(state.ingredients, updatedIng);
            const updatedSt = {
                ingredients: ipdatedIngs,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
            return updateObject(state, updatedSt);
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: {
                    salad: action.ingredients.salas,
                    bacon: action.ingredients.bacon,
                    meat: action.ingredients.meat,
                    cheese: action.ingredients.cheese
                },
                totalPrice: 4,
                error: false
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }

};

export default burgerBuilder;