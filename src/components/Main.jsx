import React from 'react';

function Main() {
    const ingredients = ["ginger", "tumeric","chicken"]
    const ingredientsList = ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))
    function submitForm(event){
        event.preventDefault()
        console.log("submitted")
    }
  return (
    <main>
      <form onSubmit={submitForm} className='ingredient-form'>
        <input 
        type='text'
        placeholder='e.g. olive oil'
        aria-label='Add ingredient'
        name='ingredient'
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientsList}</ul>
    </main>
  );
}



export default Main;
