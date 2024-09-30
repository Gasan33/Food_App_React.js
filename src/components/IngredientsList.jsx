import IngredientsItem from "./IngredientsItem";

export default function IngredientsList({ food, isLoading }) {
    return (
        <div>
            {isLoading ? (<p>Loading...</p>) :
                food.extendedIngredients.map((item) => (
                    <IngredientsItem item={item} />
                ))}
        </div>
    );
}