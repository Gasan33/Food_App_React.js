import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
    const [food, setFood] = useState({});
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const API_KEY = "0ff63be07d214ee98c895f92bdce100b";
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?apiKey=${API_KEY}`);
            const data = await res.json();
            console.log(data);
            setFood(data);
        }
        fetchFood();
    }, [foodId]);
    return (
        <div>
            Food Details{foodId}
            {food.title}
            <img src={food.image} alt="" />
        </div>
    );
}