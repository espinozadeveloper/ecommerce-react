import { useReducer, useState } from "react";
import { TYPES } from "../actions/shoppingAction";
import CartItem from "../components/CartItem";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import styles from "./ShoppingCart.module.css";
import { useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState); 
    const [arrayChange, setarrayChange] = useState(false);
    const {cart} = state;
    let totalPurchase = 0;

    state.cart.forEach(total);

    function total(item){
        totalPurchase = totalPurchase + (item.price * item.quantity); 
        totalPurchase.toFixed(2);
    }

    useEffect (() => {
        setarrayChange(false);
    },[arrayChange]);

    const delFromCart = (id, all = false) => {
        if (all){
            dispatch({type: TYPES.REMOVE_ALL_FROM_CART, payload: id});
            setarrayChange(true);
        } 
        else{    
            dispatch({type: TYPES.REMOVE_ONE_FROM_CART, payload: id});
            setarrayChange(true);
        }
    };

    const clearCart = () => {
        dispatch({type:TYPES.CLEAR_CART});
        setarrayChange(true);
    };
    return(
        <div>
            <h3 className={styles.titleCart}> Shopping cart</h3>
            <article className={styles.buttonClear}>
                <button onClick={clearCart}><MdOutlineRemoveShoppingCart size={30}/> <br></br> clear cart</button>  
            </article>
            <p className={styles.titleCart}>TOTAL: $ {totalPurchase}</p>
            <ul>
                {cart.map((item, index)=> (
                    <CartItem  key={index} data = {item} delFromCart={delFromCart}/>))}
            </ul>
        </div>
    );   
};

export default ShoppingCart