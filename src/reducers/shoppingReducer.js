import { TYPES } from "../actions/shoppingAction";

export const shoppingInitialState ={
    cart:[],
};


export function shoppingReducer(state, action){
    switch (action.type) {
        case TYPES.ADD_TO_CART:{
            let newItem = action.payload;
            let itemInCart = state.cart.find(item => item.id === newItem.id);
            if (itemInCart){
                state.cart.map((item) =>
                        item.id === newItem.id
                            ? item.quantity = item.quantity + 1
                            : item  
                )   
            }
            else {
                newItem.quantity = 1;
                state.cart.push(newItem); 
            }
            return state;
        }
        case TYPES.REMOVE_ONE_FROM_CART:{
            let itemToDelete = state.cart.find(item => item.id === action.payload);
            if (itemToDelete){
                if (itemToDelete.quantity > 1){
                    itemToDelete.quantity = itemToDelete.quantity - 1;
                }
                else{
                    let indexArray = state.cart.findIndex(item => item.id === action.payload);
                    state.cart.splice(indexArray,1);
                }
            }
            return state;
        }
        case TYPES.REMOVE_ALL_FROM_CART:{
            state.cart = state.cart.filter((item) => item.id !== action.payload);
            return state;
        }
        case TYPES.CLEAR_CART:{
            state.cart = [];   
            return state;
        }               
        default:
            return state;
    }
}
