import { Link } from 'react-router-dom';
import './home-page.scss';
import { SpecOfferCard } from '../../components/SpecOfferCard';
import { ProductsSlider} from '../../components/ProductsSlider';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import { productCategories } from '../../variables/variables';
import { scrollToTop } from '../../services/scrollToTop';


export const HomePage = () => {
  const {
    setCurrentPage,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Home');
  });

  return (
    <div className="home__page">
      <section className="slogan__section">
        <div className="container">
          <h1 className="slogan__title">Heat that gives <span>COMFORT</span> for life</h1>
          <div className="slogan__text">
            Teploceramic is a Ukrainian company that
            specializes in the production of high-quality
            thermal equipment.
          </div>
          <button className="slogan__button button primary-button">Shop Now</button>
        </div>
      </section>
      <section className="categories__section">
        <div className="container">
          <h2 className="categories__title">SHOP BY CATEGORY</h2>
          <ul className="categories__list">
            <li className="categories__item">
              <Link
                to="/dehydrators"
                className="category__link"
                onClick={scrollToTop}
              >
                <div className="category__img dehydrators" />
                <p className="category__title">Dehydrators</p>
              </Link>
            </li>
            <li className="categories__item">
              <Link
                to="/heaters"
                className="category__link"
                onClick={scrollToTop}
              >
                <div className="category__img heaters" />
                <p className="category__title">Heaters</p>
              </Link>
            </li>
            <li className="categories__item">
              <Link
                to="/suspended heaters"
                className="category__link"
                onClick={scrollToTop}
              >
                <div className="category__img suspended-heaters" />
                <p className="category__title">Suspended heaters</p>
              </Link>
            </li>
            <li className="categories__item">
              <Link
                to="/towel warmers"
                className="category__link"
                onClick={scrollToTop}
              >
                <div className="category__img towel-warmers" />
                <p className="category__title">Towel warmers</p>
              </Link>
            </li>
            <li className="categories__item">
              <Link
                to="/accessories"
                className="category__link"
                onClick={scrollToTop}
              >
                <div className="category__img accessories" />
                <p className="category__title">Accessories</p>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="special-offers__section">
        <div className="container">
          <h2 className="special-offers__title">SPECIAL OFFERS</h2>
          <SpecOfferCard />
          <div className="special-nav__buttons">
            <button className="special__button-prev special__button button bgd-icon" />
            <button className="special__button-next special__button button bgd-icon" />
          </div>
        </div>
      </section>
      <section className="all-products__section">
        <div className="container">
        <ul className="product-types__list">
          {Object.keys(productCategories).map(category => (
            <li className="product-type__item" key={category}>
              <ProductsSlider title={category} />
            </li>
          ))}
        </ul>
        </div>
      </section>
    </div>
  );
}
