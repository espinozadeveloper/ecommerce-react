import styles from "./ProductsCard.module.css"
import {Link} from "react-router-dom";

export function ProductsCard({product}) {
    return(
        <Link to={"/product/" + product.id}>
            <div className={styles.productBox}>
                <img 
                    width={225} 
                    height={250} 
                    src =  {product.image}
                    className={styles.productImage} 
                    alt="Imagen producto" 
                />
                <li className={styles.productCardTitle}>{product.title}</li>
                <li className={styles.productCardPrice}>Price $: {product.price}</li>
            </div>
        </Link>
        )
}