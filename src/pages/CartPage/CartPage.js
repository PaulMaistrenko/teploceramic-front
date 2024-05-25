import { Link } from 'react-router-dom';
import './cart-page.scss';
import { CartItem } from '../../components/CartItem';
import { ProductsSlider } from '../../components/ProductsSlider';
import { CartPageTop } from '../../components/CartPageTop';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import { OrderTotal } from '../../components/OrderTotal';
import { scrollToTop } from '../../services/scrollToTop';

export const CartPage = () => {
  const {
    setCurrentPage,
  } = useContext(MainContext)

  useEffect (() => {
    setCurrentPage('Cart page');
    scrollToTop();
  });

  return (
    <div className="cart__page">
      <div className="container">
        <CartPageTop title="SHOPPING CART" />
        <ul className="cart-items__list">
          <li className="cart-items__item">
            <CartItem />
          </li>
          <li className="cart-items__item">
            <CartItem />
          </li>
          <li className="cart-items__item">
            <CartItem />
          </li>
        </ul>
        <OrderTotal />
        <div className="cart-page__actions">
          <button className="cart-page__delete-button button secondary-button">Remove all</button>
          <Link to="/place an order" className="place-an-order__link button primary-button">Place an order</Link>
        </div>
        <ProductsSlider />
      </div>
    </div>
  );
}
