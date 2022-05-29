import styles from "./CartItem.module.css";
import { MdRemoveShoppingCart } from 'react-icons/md';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';


const CartItem = ({data, delFromCart}) => {
    let {id, title, price, image, quantity} = data;
    

    return (
        <div className={styles.productItemCartBox}>
            <hr></hr>
            <img className={styles.productItemCartImage} 
            width={130} 
            height={130} 
            src =  {image} 
            alt={"product"}
            />
            <h4 className={styles.productItemCartTitle}>{title}</h4>
            <h5 className={styles.productItemCartPrice}>$ {price} x {quantity} = $ {price * quantity}</h5>
            <button className={styles.productItemCartButton} onClick={()=> delFromCart(id)}> <MdOutlineRemoveShoppingCart size={20}/> <br></br> remove one</button> &nbsp;&nbsp;
            <button className={styles.productItemCartButton} onClick={()=> delFromCart(id, true)}> <MdRemoveShoppingCart size={20}/> <br></br> &nbsp; delete all  &nbsp; </button>
            <hr></hr>
        </div>
    );
};
export default CartItem;
