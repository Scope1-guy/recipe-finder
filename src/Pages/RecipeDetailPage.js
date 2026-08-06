// function RecipeDetailPage({ recipe }) {
//   const ingredientsList = getIngredientsList(recipe);

//   return (
//     <div className="recipe-detail">
//       <img
//         className="recipe-detail__image"
//         src={recipe.strMealThumb}
//         alt={recipe.strMeal}
//       />
//       <h2 className="recipe-detail__title">{recipe.strMeal}</h2>
//       <p className="recipe-detail__category">{recipe.strCategory}</p>

//       <section className="recipe-detail__section">
//         <h3>Ingredients</h3>
//         <ul className="recipe-detail__ingredients">
//           {ingredientsList.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//       </section>

//       <section className="recipe-detail__section">
//         <h3>Instructions</h3>
//         <p>{recipe.strInstructions}</p>
//       </section>

//       <button className="recipe-detail__favorite">Add to Favorites</button>
//     </div>
//   );
// }

// function getIngredientsList(recipe) {
//   const ingredients = [];

//   for (let i = 1; i <= 20; i++) {
//     const ingredient = recipe[`strIngredient${i}`];
//     const measure = recipe[`strMeasure${i}`];

//     if (ingredient && ingredient.trim() !== "") {
//       ingredients.push(`${measure} ${ingredient}`);
//     }
//   }

//   return ingredients;
// }

// export default RecipeDetailPage;

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetailPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (err) {
        setError("Couldn't load this recipe.");
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!recipe) return null;

  const ingredientsList = getIngredientsList(recipe);
  const embedUrl = getYoutubeEmbedUrl(recipe.strYoutube);

  return (
    <div className="recipe-detail">
      <Link to="/search" className="recipe-detail__back">
        ← Back to search
      </Link>

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

      {embedUrl && (
        <>
          <button
            className="recipe-detail__favourite"
            onClick={() => setShowVideo(!showVideo)}
          >
            {showVideo ? "Hide Video" : "Watch Video"}
          </button>

          {showVideo && (
            <div className="recipe-detail__video">
              <iframe
                width="100%"
                height="315"
                src={embedUrl}
                title="Recipe Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </>
      )}

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

function getYoutubeEmbedUrl(youtubeUrl) {
  if (!youtubeUrl || youtubeUrl.trim() === "") {
    return null;
  }

  const videoId = youtubeUrl.split("v")[1];

  if (!videoId) {
    return null;
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

export default RecipeDetailPage;
