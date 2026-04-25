function CategoryButtons({ categories, handleCategory }) {
  return (
    <div className="categories">
      {categories.map((item) => (
        <button key={item} onClick={() => handleCategory(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryButtons;
