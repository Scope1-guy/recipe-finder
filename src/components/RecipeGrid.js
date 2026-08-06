import RecipeCard from "./RecipeCard";
import LoadingSpinner from "./LoadingSpinner";

function RecipeGrid({ recipes, query, loading, error, onRecipeClick }) {
  if (error) {
    return <p className="error-state">{error}</p>;
  }

  if (loading) {
    return <LoadingSpinner />;
  }

  if (query.trim() === "") {
    return <p className="empty-state">Start typing to search for a recipe</p>;
  }

  if (recipes === null) {
    return <p className="empty-state">Meal not available</p>;
  }

  return (
    <div className="recipe-grid">
      {recipes.length === 0 ? (
        <p className="empty-state">No recipes found. Try a different search.</p>
      ) : (
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            onRecipeClick={onRecipeClick}
          />
        ))
      )}
    </div>
  );
}

export default RecipeGrid;
