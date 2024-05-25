import { useNavigate } from "react-router-dom";
import './cart-page-top.scss'

export const CartPageTop = ({ title = 'PLACE AN ORDER' }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-page__top">
      <div className="cart-page__link">
        <button className="cart-page-back__link bgd-icon"
          onClick={() => navigate(-1)}
        />
        <h1 className="cart-page__title">{title}</h1>
      </div>
      {title === 'PLACE AN ORDER' && <p className="cart-item__amount">2 products</p>}
    </div>
  );
}
