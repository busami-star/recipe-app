import React from "react";
import Ingredients from "./Ingredients";
import Recipe from "./Recipe";

function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipeShown, setRecipeShown] = React.useState(false);

    function flipRecipeShown() {
        setRecipeShown((prevShown) => !prevShown);
    }

    return (
        <main>
            <Ingredients ingredients={ingredients} setIngredients={setIngredients} />
            {ingredients.length > 3 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={flipRecipeShown} aria-expanded={recipeShown}>
                        {recipeShown ? "Hide recipe" : "Get a recipe"}
                    </button>
                </div>
            )}
            {recipeShown && <Recipe />}
        </main>
    );
}

export default Main;
