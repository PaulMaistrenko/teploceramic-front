import { useContext } from 'react';
import './filters-page.scss';
import { MainContext } from '../../context/MainContext';

export const FiltersPage = () => {
  const {
    setIsFiltersPageOpen,
  } = useContext(MainContext);

  return (
    <div className="filters__page">
      <div className="container">
        <button
          className="filters-close__button"
          onClick={() => setIsFiltersPageOpen(false)}
        >
          Filters
        </button>
        <ul className="filter-types__list">
          <li className="filter-type__item">
            <p className="filter-type__title">Construction</p>
            <div className="filter__values">
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Horizontal fan"
                  name="Horizontal fan"
                >
                  Horizontal fan
                </button>
              </div>
            </div>
          </li>
          <li className="filter-type__item">
            <p className="filter-type__title">Control</p>
            <div className="filter__values">
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Digital control and timer"
                  name="Digital control and timer"
                >
                  Digital control and timer
                </button>
              </div>
            </div>
          </li>
          <li className="filter-type__item">
            <p className="filter-type__title">Drying area</p>
            <div className="filter__values">
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  0,45 m²
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  0,9 m²
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  1,5 m²
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  2,5 m²
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  5 m²
                </button>
              </div>
            </div>
          </li>
          <li className="filter-type__item">
            <p className="filter-type__title">Power</p>
            <div className="filter__values">
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  2 x 1000 w
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  500 w
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  700 w
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  1000 w
                </button>
              </div>
            </div>
          </li>
          <li className="filter-type__item">
            <p className="filter-type__title">Size</p>
            <div className="filter__values">
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  30 x 37 x 30 cm
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  37 x 40 x 37 cm
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  42 x 55 x 38 cm
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  54 x 75 x 107 cm
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  54 x 75 x 107 cm
                </button>
              </div>
              <div className="filter__value">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  54 x 75 x 57 cm
                </button>
              </div>
            </div>
          </li>
          <li className="filter-type__item">
            <p className="filter-type__title">Price, €</p>
            <div className="submit-form__wrapper">
              <form className="price__interval">
                <div className="price__values">
                  <input
                    type="text"
                    name="min-value"
                    className="price__value price__min-value"
                    placeholder="000000"
                    autoComplete="off"
                    defaultValue="00000"
                  />
                  <p>-</p>
                 <input
                    name="max-value"
                    className="price__value price__max-value"
                    placeholder="000000"
                    autoComplete="off"
                    defaultValue="00000"
                  />
                </div>
                <button className="price__submit-button">OK</button>
              </form>
            </div>
            <div className="price-range">
              <div className="price-range__scale">
                <div className="price-range__bar"></div>
              </div>
              <button className="price-range__handle min" />
              <button className="price-range__handle max" />
            </div>
          </li>
        </ul>
        <button className="clear-all-filters__button button secondary-button">Clear all filters</button>
      </div>
    </div>
  );
}
