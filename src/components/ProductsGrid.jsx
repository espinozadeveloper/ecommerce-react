import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsCard } from "./ProductsCard";
import styles from "./ProductsGrid.module.css";
import { Spinner } from "./Spinner";

function useQuery(){
    return new URLSearchParams(useLocation().search)
}


export function ProductsGrid() {
  
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const query = useQuery();
    const search = query.get("search");
    

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data) => {setProducts(data)});
         setIsLoading(false);
    },[]);

    if (isLoading){
        return <div> <Spinner/> </div>;
    }

    const productsFilter = products.filter(products => {
        if (!search) return true;

        const ProductTitle = products.title.toLowerCase();
        return ProductTitle.includes(search.toLowerCase());
    });

    if (productsFilter.length === 0){
        if (search){
            return <div className={styles.textNotFound}> Product not found </div>;
        }
    }

    return(
        <ul className={styles.productsGrid}>
            {productsFilter.map((productsFilter) => (<ProductsCard key={productsFilter.id} product={productsFilter} /> ))}
        </ul>
    );
}