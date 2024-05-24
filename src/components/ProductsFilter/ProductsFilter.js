import { useContext } from 'react';
import { SearchForm } from '../SearchForm';
import { SelectForm } from '../SelectForm';
import './products-filter.scss';
import { MainContext } from '../../context/MainContext';

export const ProductsFilter = () => {
  const {
    setIsFiltersPageOpen,
  } = useContext(MainContext);

  return (
    <section className="products-filter">
      <button
        className="filters-open__button button primary-button"
        onClick={() => setIsFiltersPageOpen(true)}
      >
        Filters
      </button>
      <SearchForm />
      <SelectForm />
    </section>
  );
}
