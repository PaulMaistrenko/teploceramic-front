import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import './search-form.scss';

export const SearchForm = () => {
  const {
    query,
    setQuery,
  } = useContext(MainContext);
  return (
    <form className="search__form">
      <input
        type="text"
        name="search"
        className="search__input"
        placeholder="Product search"
        autoComplete="off"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="search__icon icon" />
    </form>
  );
}
