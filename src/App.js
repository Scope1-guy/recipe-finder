import SearchPage from "./Pages/SearchPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
import { useState } from "react";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  return (
    <div className="app">
      {selectedRecipe === null ? (
        <SearchPage onRecipeClick={setSelectedRecipe} />
      ) : (
        <RecipeDetailPage recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default App;
