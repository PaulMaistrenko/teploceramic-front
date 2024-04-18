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
         className="filters__header extra-large__text--medium"
          onClick={() => setIsFiltersPageOpen(false)}
        >
          Filters
        </button>
        <div className="filters__types-list">
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Construction</p>
            <div className="filter__values">
              <div className="filter__value  main__text--regular text-color--neutralN300">
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
          </div>
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Control</p>
            <div className="filter__values">
              <div className="filter__value  main__text--regular text-color--neutralN300">
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
          </div>
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Drying area</p>
            <div className="filter__values">
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  0,45 m²
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  0,9 m²
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  1,5 m²
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Drying area"
                  name="Drying area"
                >
                  2,5 m²
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
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
          </div>
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Power</p>
            <div className="filter__values">
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  2 x 1000 w
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  500 w
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Power"
                  name="Power"
                >
                  700 w
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
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
          </div>
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Size</p>
            <div className="filter__values">
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  30 x 37 x 30 cm
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  37 x 40 x 37 cm
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  42 x 55 x 38 cm
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  54 x 75 x 107 cm
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
                <button
                  className="filter__button"
                  type="radio"
                  id="Size"
                  name="Size"
                >
                  54 x 75 x 107 cm
                </button>
              </div>
              <div className="filter__value  main__text--regular text-color--neutralN300">
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
          </div>
          <div className="filter-type">
            <p className="filter-type__title large__text--medium text-color--neutralN400">Price, €</p>
            <div className="filter-type__wrapper">
              <form className="filter__interval">
                <input
                  type="text"
                  name="min-value"
                  className="filter__min-value"
                  placeholder="000000"
                  autoComplete="off"
                  defaultValuevalue="00000"
                />
                <p>-</p>
                <input
                  type="text"
                  name="max-value"
                  className="filter__max-value"
                  placeholder="000000"
                  autoComplete="off"
                  defaultValuevalue="00000"
                />
                <button className="filter__submit-button text-color--neutralN400">OK</button>
              </form>
            </div>
            <div className="filter-range">
              <div className="filter-range__scale">
                <div className="filter-range__bar"></div>
              </div>
              <button className="filter-range__handle min"></button>
              <button className="filter-range__handle max"></button>
            </div>
          </div>
        </div>
        <button className="secondary__button-small secondary__button main__text--medium">Clear all filters</button>
      </div>
    </div>
  );
}
