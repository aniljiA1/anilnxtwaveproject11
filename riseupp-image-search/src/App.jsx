import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryButtons from "./components/CategoryButtons";
import ImageGrid from "./components/ImageGrid";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";
import { searchImages } from "./api/unsplash";

const categories = ["Mountain", "Flowers", "Beaches", "Cities"];

function App() {
  const [query, setQuery] = useState("Animals");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchImages = async (searchText = query, currentPage = page) => {
    try {
      setLoading(true);

      const data = await searchImages(searchText, currentPage);

      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(query, page);
  }, [page]);

  const handleSearch = () => {
    setPage(1);
    fetchImages(query, 1);
  };

  const handleCategory = (category) => {
    setQuery(category);
    setPage(1);
    fetchImages(category, 1);
  };

  return (
    <div className="app">
      <Header />

      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <CategoryButtons
        categories={categories}
        handleCategory={handleCategory}
      />

      <h2 className="title">{query}</h2>

      {loading ? (
        <Loader />
      ) : (
        <>
          <ImageGrid images={images} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </div>
  );
}

export default App;
