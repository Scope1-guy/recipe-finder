import { Route, Routes } from "react-router-dom";
import IntroPage from "./Pages/IntroPage";
import SearchPage from "./Pages/SearchPage";
import RecipeDetailPage from "./Pages/RecipeDetailPage";
// import { useState } from "react";

// function App() {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);
//   return (
//     <div className="app">
//       {selectedRecipe === null ? (
//         <SearchPage onRecipeClick={setSelectedRecipe} />
//       ) : (
//         <RecipeDetailPage recipe={selectedRecipe} />
//       )}
//     </div>
//   );
// }

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
