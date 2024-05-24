import { Link } from "react-router-dom";
import './cart-page-top.scss'

export const CartPageTop = ({ title = 'PLACE AN ORDER' }) => {
  return (
    <div className="cart-page__top">
      <div className="cart-page__link">
        <Link to="/" className="cart-page-back__link bgd-icon" />
        <h1 className="cart-page__title">{title}</h1>
      </div>
      {title === 'PLACE AN ORDER' && <p className="cart-item__amount">2 products</p>}
    </div>
  );
}
