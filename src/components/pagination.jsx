/* eslint-disable react/prop-types */
import React from "react";

const Pagination = ({ products, page, setPage }) => {
  const totalPages = Math.ceil(products.length / 10);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const renderPageKey = (currPage, key) => {
    return (
      <span
        key={key}
        className={page === currPage ? "pagination__selected" : ""}
        onClick={() => selectPageHandler(currPage)}
      >
        {currPage}
      </span>
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(renderPageKey(i));
    }

    return pageNumbers;
  };

  return (
    <div className="pagination">
      <span
        onClick={() => selectPageHandler(page - 1)}
        className={page > 1 ? "" : "pagination__disable"}
      >
        ◀
      </span>

      {renderPageNumbers()}

      <span
        onClick={() => selectPageHandler(page + 1)}
        className={page < products.length / 10 ? "" : "pagination__disable"}
      >
        ▶
      </span>
    </div>
  );
};

export default Pagination;
