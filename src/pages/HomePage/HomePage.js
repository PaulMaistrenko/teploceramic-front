import { Link } from "react-router-dom";

import dehydrators from '../../assets/blocks/categories/Dehydrators.svg';
import heaters from '../../assets/blocks/categories/Heaters.svg';
import suspendedHeaters from '../../assets/blocks/categories/Suspended heaters.svg';
import towelWarmers from '../../assets/blocks/categories/Towel warmers.svg';
import accessories from '../../assets/blocks/categories/Accessories.svg';

/* temporery imports */

import specialOfferImg from '../../temporery-files/special-offers_img.png';


import dehydrator from '../../temporery-files/dehydrator_exemple.png';
import heater from '../../temporery-files/heaters_exemple.png';
import suspendedHeater from '../../temporery-files/suspendet-heaters_exemple.png';
import towelWarmer from '../../temporery-files/towel-warmers_exemple.png';
import accessory from '../../temporery-files/accessories_exemple.png';
import { scrollToTop } from "../../helpers/scrollToTop";

export const HomePage = () => {
  return (
    <div className="home__page">
    <section className="slogan">
      <div className="slogan__content container">
        <p className="slogan__title">Heat that gives <span>COMFORT</span> for life</p>
        <p className=" slogan__text secondary__text--regular text-color--neutralN200">Teploceramic is a Ukrainian company that specializes in the production of high-quality thermal equipment.</p>
        <Link className="button" to="/">Shop Now</Link>
      </div>
    </section>
    <section className="shop-by-category">
        <div className="container">
          <h6 className="section__title">SHOP BY CATEGORY</h6>
          <ul className="category__cards">
            <li className="category__card">
              <Link
                className="category__link"
                to="/dehydrators"
                onClick={scrollToTop}
              >
                <img src={dehydrators} alt="Dehydrators" className="category__img" />
                <p className="category__title main__text--medium">Dehydrators</p>
              </Link>
            </li>
            <li className="category__card">
              <Link
                className="category__link"
                to="/heaters"
                onClick={scrollToTop}
              >
                <img src={heaters} alt="Heaters" className="category__img" />
                <p className="category__title main__text--medium">Heaters</p>
              </Link>
            </li>
            <li className="category__card">
              <Link
                className="category__link"
                to="/suspended heaters"
                onClick={scrollToTop}
              >
                <img src={suspendedHeaters} alt="Suspended heaters" className="category__img" />
                <p className="category__title main__text--medium">Suspended heaters</p>
              </Link>
            </li>
            <li className="category__card">
              <Link
                className="category__link"
                to="/towel warmers"
                onClick={scrollToTop}
              >
                <img src={towelWarmers} alt="Towel warmers" className="category__img" />
                <p className="category__title main__text--medium">Towel warmers</p>
              </Link>
            </li>
            <li className="category__card">
              <Link
                className="category__link"
                to="/accessories"
                onClick={scrollToTop}
              >
                <img src={accessories} alt="Accessories" className="category__img" />
                <p className="category__title main__text--medium">Accessories</p>
              </Link>
            </li>
          </ul>
        </div>
      </section><section className="special-offers">
        <div className="container">
          <h6 className="section__title">SPECIAL OFFERS</h6>
          <ul className="spec-cards">
            <li className="spec-card">
              <img src={specialOfferImg} alt="" className="spec-card__img" />
              <div className="spec-card__content">
                <p className="item__code secondary__text--regular text-color--neutralN300">Code: 2588451</p>
                <p className="item__name extra-large__text--medium">TEPLOCERAMIC TC500BC+</p>
                <p className="item__color secondary__text--regular text-color--neutralN100">Black</p>
                <div className="item__old-conditions">
                  <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                  <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
                </div>
                <p className="item__price">349 €</p>
              </div>
              <button className="button">Buy Now</button>
            </li>
            <div className="nav__buttons">
              <button className="prev icon"></button>
              <button className="next icon"></button>
            </div>
          </ul>
        </div>
      </section><section className="product-category">
        <div className="container">
          <div className="product-category__top">
            <h6 className="category__title">DEHYDRATORS</h6>
            <Link
              className="to-all-products__link main__text--medium"
              to="/dehydrators"
              onClick={scrollToTop}
            >
              show all
            </Link>
          </div>
          <ul className="product__list">
            <li className="item__card">
              <p className="item__code secondary__text--regular text-color--neutralN300">Code: FD500</p>
              <img src={dehydrator} alt="" className="item__img" />
              <div className="item__info">
                <p className="item__type main__text--medium text-color--neutralN350">Dehydrator</p>
                <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic FD500 </p>
                <p className="item__color secondary__text--regular text-color--neutralN350">Silver</p>
              </div>
              <div className="product-category__bottom">
                <div className="product-price__wrapper">
                  <div className="item__old-conditions">
                    <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                    <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
                  </div>
                  <p className="item__price">210 €</p>
                </div>
                <button className="add-to-cart__button icon"></button>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="product-category">
        <div className="container">
          <div className="product-category__top">
            <h6 className="category__title">HEATERS</h6>
            <Link
              className="to-all-products__link main__text--medium"
              to="/heaters"
              onClick={scrollToTop}
            >
              show all
            </Link>
          </div>
          <ul className="product__list">
            <li className="item__card">
              <p className="item__code secondary__text--regular text-color--neutralN300">Code: TC400M-white</p>
              <img src={heater} alt="" className="item__img" />
              <div className="sale__label icon"></div>
              <div className="item__info">
                <p className="item__type main__text--medium text-color--neutralN350">Heater</p>
                <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic TC400M</p>
                <p className="item__color secondary__text--regular text-color--neutralN350">White</p>
              </div>
              <div className="product-category__bottom">
                <div className="product-price__wrapper">
                  <div className="item__old-conditions">
                    <p className="item__old-price secondary__text--regular text-color--neutralN300">65 €</p>
                    <p className="item__discount secondary__text--regular text-color--dangerDN500">-5%</p>
                  </div>
                  <p className="item__price">57 €</p>
                </div>
                <button className="add-to-cart__button icon"></button>
              </div>
            </li>
          </ul>
        </div>
      </section><section className="product-category">
        <div className="container">
          <div className="product-category__top">
            <h6 className="category__title">SUSPENDED HEATERS</h6>
            <Link
              className="to-all-products__link main__text--medium"
              to="/suspended heaters"
              onClick={scrollToTop}
            >
              show all
            </Link>
          </div>
          <ul className="product__list">
            <li className="item__card">
              <p className="item__code secondary__text--regular text-color--neutralN300">Code: TP1-07</p>
              <img src={suspendedHeater} alt="" className="item__img" />
              <div className="sale__label icon"></div>
              <div className="item__info">
                <p className="item__type main__text--medium text-color--neutralN350">Suspended heater</p>
                <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic TP1-07</p>
                <p className="item__color secondary__text--regular text-color--neutralN350">White</p>
              </div>
              <div className="product-category__bottom">
                <div className="product-price__wrapper">
                  <div className="item__old-conditions">
                    <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                    <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
                  </div>
                  <p className="item__price">210 €</p>
                </div>
                <button className="add-to-cart__button icon"></button>
              </div>
            </li>
          </ul>
        </div>
      </section><section className="product-category">
        <div className="container">
          <div className="product-category__top">
            <h6 className="category__title">TOWEL WARMERS</h6>
            <Link
              className="to-all-products__link main__text--medium"
              to="/towel warmers"
              onClick={scrollToTop}
            >
              show all
            </Link>
          </div>
          <ul className="product__list">
            <li className="item__card">
              <p className="item__code secondary__text--regular text-color--neutralN300">Code: TC1000BC-white-marble</p>
              <img src={towelWarmer} alt="" className="item__img" />
              <div className="sale__label icon"></div>
              <div className="item__info">
                <p className="item__type main__text--medium text-color--neutralN350">Towel warmer</p>
                <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic TC1000BC</p>
                <p className="item__color secondary__text--regular text-color--neutralN350">White marble</p>
              </div>
              <div className="product-category__bottom">
                <div className="product-price__wrapper">
                  <div className="item__old-conditions">
                    <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                    <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
                  </div>
                  <p className="item__price">210 €</p>
                </div>
                <button className="add-to-cart__button icon"></button>
              </div>
            </li>
          </ul>
        </div>
      </section><section className="product-category">
        <div className="container">
          <div className="product-category__top">
            <h6 className="category__title">ACCESSORIES</h6>
            <Link
              className="to-all-products__link main__text--medium"
              to="/accessories"
              onClick={scrollToTop}
            >
              show all
            </Link>
          </div>
          <ul className="product__list">
            <li className="item__card">
              <p className="item__code secondary__text--regular text-color--neutralN300">Code: 28902857</p>
              <img src={accessory} alt="" className="item__img" />
              <div className="sale__label icon"></div>
              <div className="item__info">
                <p className="item__type main__text--medium text-color--neutralN350">Accessories</p>
                <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic AC70</p>
                <p className="item__color secondary__text--regular text-color--neutralN350">Silver</p>
              </div>
              <div className="product-category__bottom">
                <div className="product-price__wrapper">
                  <div className="item__old-conditions">
                    <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
                    <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
                  </div>
                  <p className="item__price">210 €</p>
                </div>
                <button className="add-to-cart__button icon"></button>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
