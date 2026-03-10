// import {ShoppingCartState} from "../context/context";
import StarRating from "./star-rating";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByRating,
  sortByPrice,
  filterByStock,
  filterBySearch,
  clearFilters,
} from "../slices/filterSlice";

const Filters = () => {
  const filterDispatch = useDispatch();
  const filterState = useSelector((state) => state.filter);
  const { byStock, sort, byRating } = filterState;

  return (
    <div className="flex flex-col w-96 gap-2">
      <span className="font-bold">Filter Products</span>
      <span>
        <input
          type="radio"
          className="mr-2"
          id="Ascending"
          name="sort"
          onChange={() => filterDispatch(sortByPrice("lowToHigh"))}
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="Ascending">Ascending</label>
      </span>
      <span>
        <input
          type="radio"
          className="mr-2"
          id="descending"
          name="sort"
          onChange={() => filterDispatch(sortByPrice("highToLow"))}
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="descending">Descending</label>
      </span>

      <span>
        <input
          type="checkbox"
          className="mr-2"
          id="outofstock"
          name="outofstock"
          onChange={() => filterDispatch(filterByStock(!byStock))}
          checked={byStock}
        />
        <label htmlFor="outofstock">Include Out of Stock</label>
      </span>

      <span className="flex items-center">
        <label className="pr-2">Rating</label>
        <StarRating
          rating={byRating}
          onChange={(i) => filterDispatch(filterByRating(i))}
        />
      </span>
      <button
        className="bg-slate-500 text-white rounded-sm"
        onClick={() => filterDispatch(clearFilters())}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
