import { useContext } from "react";
import { SearchForm } from "../SearchForm";
import { SelectForm } from "../SelectForm";
import './product-filter.scss';
import { MainContext } from "../../context/MainContext";

export const ProductsFilter = () => {
  const {
    setIsFiltersPageOpen,
  } = useContext(MainContext);

  return (
    <div className="products__filter">
      <div className="container">
        <button
          className="filters-open__button button main__text--medium"
          onClick={() => setIsFiltersPageOpen(true)}
        >
          Filters
        </button>
        <SearchForm />
        <SelectForm />
      </div>
    </div>
  );
}
