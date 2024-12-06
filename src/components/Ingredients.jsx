import React from "react";

function Ingredients({ ingredients, setIngredients }) {
    const ingredientsList = ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
    ));

    function addIngredients(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient");

        
        if (!ingredients.includes(newIngredient)) {
            setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
        }

        event.target.reset();
    }

    return (
        <section>
            <form onSubmit={addIngredients} className="ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. cumin"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button type="submit">Add ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <div>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsList}
                    </ul>
                </div>
            )}
        </section>
    );
}

export default Ingredients;
