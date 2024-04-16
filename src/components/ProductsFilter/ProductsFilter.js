import { SearchForm } from "../SearchForm";
import { SelectForm } from "../SelectForm";
import './product-filter.scss';

export const ProductsFilter = () => {
  return (
    <div className="products__filter">
      <div className="container">
        <button className="filters-open__button button main__text--medium">Filters</button>
        <SearchForm />
        <SelectForm />
      </div>
    </div>
  );
}
