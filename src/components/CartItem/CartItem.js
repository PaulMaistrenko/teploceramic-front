import './cart-item.scss';
import cart_item_img from '../../temporery-files/towel-warmers_exemple.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export const CartItem = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <img src={cart_item_img} alt="cart-item-1" className="cart-item__img" />
        <div className="cart-item__description">
          <p className="cart-item__code">Code: FD500</p>
          <h3 className="cart-item__name">Dehydrator Teploceramic FD500 </h3>
        </div>
      </div>
      <div className="cart-item__count">
      { currentPage === 'Cart page' 
        ? (
        <div className="cart-item__counter">
          <button className="cart-item__button decrease__button bgd-icon" />
          <p className="counter__value">1</p>
          <button className="cart-item__button rise__button bgd-icon" />
        </div>
          )
        : (
          <div className="cart-item__counter">
            <p className="counter__value counter__value--neutralN350">1 unit</p>
          </div>
        )
      }
        <div className="cart-item__prices">
          <div className="cart-item__discount-block">
            <p className="cart-item__old-price">300 €</p>
            <p className="cart-item__discount">-25%</p>
          </div>
          <div className="cart-item__price">210 €</div>
        </div>
      </div>
      { currentPage === 'Cart page' && (
        <div className="cart-item__actions">
          <Link to="/accessories" className="accessories-link">Add accessories</Link>
          <button className="remove-cart-item__button">Remove from cart</button>
        </div>
      )}
    </div>
  );
}
