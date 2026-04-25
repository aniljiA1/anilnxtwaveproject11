import { FaSearch } from "react-icons/fa";

function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search images..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
