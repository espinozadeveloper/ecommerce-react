import { ProductsGrid } from "../components/ProductsGrid";
import { Search } from "../components/Search";

export function LandingPage() {
    return(
        <div>
            <Search/>
            <ProductsGrid/>
        </div>
    );
    
}