import { Link } from 'react-router-dom';
import dehydrator from '../../temporery-files/dehydrator_exemple.png';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import './product-item.scss';
import { scrollToTop } from '../../helpers/scrollToTop';

export const ProductItem = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  /* remove after implement api */

  const itemId = 1;

  return (
    <>
      <Link
        to={`/${currentPage.toLowerCase()}/${itemId}`}
        className="product-details__link"
        onClick={scrollToTop}
      >
        <p className="item__code secondary__text--regular text-color--neutralN300">Code: FD500</p>
        <img src={dehydrator} alt="" className="item__img" />
        <div className="item__info">
          <p className="item__type main__text--medium text-color--neutralN350">Dehydrator</p>
          <p className="item__name extra-large__text--medium text-color--neutralN400">Teploceramic FD500 </p>
          <p className="item__color secondary__text--regular text-color--neutralN350">Silver</p>
        </div>
      </Link>
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
    </>
  );
}
