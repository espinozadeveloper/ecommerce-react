import styles from "./ProductDetails.module.css"
import { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router";
import { Spinner } from "../components/Spinner";
import { shoppingInitialState, shoppingReducer } from "../reducers/shoppingReducer";
import { TYPES } from "../actions/shoppingAction";
import { MdAddShoppingCart } from 'react-icons/md';
import swal from 'sweetalert'; 

export function ProductDetails() {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { productId } = useParams();
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);


    useEffect(()=>{
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products/' + productId)
        .then(res=>res.json())
        .then((data) => {setProduct(data)});
        
        setIsLoading(false);

    },[productId]);

    if(isLoading){
        return<div><Spinner/></div>;
    }

    const addToCart = (productToCart) => {
        dispatch({type: TYPES.ADD_TO_CART, payload:productToCart});
        console.log(state);
        swal({
            title: "added to cart",
            icon: "success",
            timer: "800"
        });
    }; 

    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.productImage}`} 
            width={340} 
            height={390} 
            src =  {product.image} 
            alt={product.title}
            />
            <div className={styles.col}>
                <p className={`${styles.productCategory} ${styles.firstItem}`}>
                <strong>{product.category}</strong>
                </p>
                <p className={styles.productTitle}>               
                    <strong>{product.title}</strong> 
                </p>
                <p className={styles.productRating}>
                   <strong> Rating {product.rating && product.rating.rate}&#9733;</strong>
                </p>    
                <p className={styles.productPrice}>
                    <strong>$ {product.price}</strong> 
                </p>
                <p className={styles.productDescription}>
                    {product.description} 
                </p>
                <button onClick={()=> addToCart(product)}> <MdAddShoppingCart size={30}/> <br></br> add to cart</button>
                <br></br>
                <br></br>
            </div>
        </div>
    );
}