import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "0ff63be07d214ee98c895f92bdce100b";
export default function Search() {
    const [query, setQuery] = useState("pizza");
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data.results);
        }
        fetchFood();
    }, [query]);
    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" />
        </div>
    );
}