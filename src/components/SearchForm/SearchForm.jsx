import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@phosphor-icons/react"
import './SearchForm.css';
function SearchForm(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState(searchParams.get("query") || "");

    const onSubmit = (event) => {
        event.preventDefault();
        if (query.trim()) {
            setSearchParams({ query: query.trim() });
        } else {
            setSearchParams({}); 
        }
    };
    return(
        <div className="search">
            <form onSubmit={onSubmit}>
                <button type="submit" className="searchIconButton" aria-label="Search">
                    <MagnifyingGlassIcon size={24} />
                </button>
                <input type="text" className="searchInput" placeholder="Search tasks by title" value={query} onChange={(e)=> setQuery(e.target.value)}/>
            </form>
        </div>
    );
}
export default SearchForm;