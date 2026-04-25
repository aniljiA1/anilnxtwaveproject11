function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        Prev
      </button>

      <span>{page}</span>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
