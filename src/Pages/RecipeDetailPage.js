function RecipeDetailPage({ recipe }) {
  const ingredientsList = getIngredientsList(recipe);

  return (
    <div className="recipe-detail">
      <img
        className="recipe-detail__image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <h2 className="recipe-detail__title">{recipe.strMeal}</h2>
      <p className="recipe-detail__category">{recipe.strCategory}</p>

      <section className="recipe-detail__section">
        <h3>Ingredients</h3>
        <ul className="recipe-detail__ingredients">
          {ingredientsList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="recipe-detail__section">
        <h3>Instructions</h3>
        <p>{recipe.strInstructions}</p>
      </section>

      <button className="recipe-detail__favorite">Add to Favorites</button>
    </div>
  );
}

function getIngredientsList(recipe) {
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return ingredients;
}

export default RecipeDetailPage;
