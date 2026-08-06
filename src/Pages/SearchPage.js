import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RecipeGrid from "../components/RecipeGrid";


function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("effect ran, query is:", query);

    if (query.trim() === "") {
      setRecipes([]);
      return;
    }
    async function fetchRecipes() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong with the request");
        }

        const data = await res.json();
        console.log("API response:", data);
        setRecipes(data.meals);
      } catch (err) {
        setError("Couldn't load recipes. Please try again.");
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipes();
  }, [query]);

  function handleSearch(searchTerm) {
    console.log("searching for", searchTerm);
    setQuery(searchTerm);
  }

  return (
    <div className="search-page">
      <Navbar />
      <SearchBar onSearch={handleSearch} />
      <RecipeGrid
        recipes={recipes}
        query={query}
        loading={loading}
        error={error}
      />
      {/* swap in LoadingSpinner or EmptyState based on your state */}
    </div>
  );
}

export default SearchPage;
