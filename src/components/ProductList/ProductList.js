import { Link } from 'react-router-dom';
import { ProductItem } from '../ProductItem';

export const ProductList = () => {
  return (
    <div className="all-products__page">
      <div className="all-products__top">
        <div className="all-products__info">
          <div className="page__path">
            <Link to="/" className="home__link icon" />
            <div className="slach icon">/</div>
            <p className="current__page">Dehydrators</p>
          </div>
          <h6 className="page__title text-color--primaryP500">DEHYDRATORS</h6>
          <div className="questions__block">
            <div className="questions__item">
              <div className="question__text large__text--regular">What is a dehydrator?</div>
              <button className="questions__button icon"></button>
            </div>
            <div className="questions__item">
              <div className="question__text large__text--regular">What types of dehydrators are there?</div>
              <button className="questions__button icon"></button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="all-products__actions">
            <button className="filters-open__button button main__text--medium">Filters</button>
          </div>
        </div>
      </div>
       <div className="container">
        <ul className="product__list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
    </div>
  );
}
