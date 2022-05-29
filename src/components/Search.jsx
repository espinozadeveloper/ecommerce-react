import styles from "./Search.module.css";
import { FaSearch }  from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search") ?? "";
    
    const handleSubmit = (e) =>{
        e.preventDefault();
      };

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}> 
            <div className={styles.searchBox}>
                <input 
                    className={styles.searchInput} 
                    type="text" 
                    value={search} 
                    placeholder = "Name Product"
                    aria-label="Search Products"
                    onChange= {(e) => {
                        const value = e.target.value;
                        setQuery({ search: value });
                    }}/>
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20}/>
                </button>
            </div>
        </form>
    )
}