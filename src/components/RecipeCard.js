function RecipeCard({ recipe, onRecipeClick }) {
  return (
    <div className="recipe-card" onClick={() => onRecipeClick(recipe)}>
      <img
        className="recipe-card__image"
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <div className="recipe-card__body">
        <h3 className="recipe-card__title">{recipe.strMeal}</h3>
        <p className="recipe-card__category">{recipe.strCategory}</p>
        <button className="recipe-card__favorite">♡</button>
      </div>
    </div>
  );
}

export default RecipeCard;
