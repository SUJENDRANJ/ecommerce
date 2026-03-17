/* eslint-disable react/prop-types */

const Pagination = ({ products, page, setPage }) => {
  const totalPages = Math.ceil(products.length / 10);

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const arr = Array(totalPages)
    .fill(0)
    .map((_, i) => i + 1);

  return (
    <div className="pagination">
      {/* Prev */}
      <span
        onClick={() => changePage(page - 1)}
        className={page === 1 ? "pagination__disable" : ""}
      >
        ◀
      </span>

      {/* Page Numbers */}
      {arr.map((p) => (
        <span
          key={p}
          className={page === p ? "pagination__selected" : ""}
          onClick={() => changePage(p)}
        >
          {p}
        </span>
      ))}

      {/* Next */}
      <span
        onClick={() => changePage(page + 1)}
        className={page === totalPages ? "pagination__disable" : ""}
      >
        ▶
      </span>
    </div>
  );
};

export default Pagination;
