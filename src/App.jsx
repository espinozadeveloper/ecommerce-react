import Logo_compra_ya from "./Logo_compra_ya.png";
import styles from "./App.module.css";
import {
    BrowserRouter as Router,
    Routes,     
    Route,
    Link,
    Navigate,
  } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ProductDetails } from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import { CgShoppingCart } from 'react-icons/cg';



export function App(){
    return (
        <Router>
            <header>
                <div className = {styles.logo}>
                    <Link to="/">
                        <div>
                            <img 
                                width={130} 
                                height={70} 
                                src = {Logo_compra_ya} alt="Logo"
                            />
                        </div>
                    </Link>
                    <Link to={"/shoppingcart/"}>
                    <div> <CgShoppingCart size={40}/></div>
                    </Link>
                </div>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="product/:productId" element={<ProductDetails />} />
                    <Route path="shoppingcart/" element={<ShoppingCart />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </main>        
        </Router>
    );
} 