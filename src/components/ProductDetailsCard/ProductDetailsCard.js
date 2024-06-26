import dehydrator from '../../temporery-files/dehydrator_exemple.png';
import './product-details-card.scss';

export const ProductDetailsCard = ({ detailType }) => {
  return (
    <div className="product__details-card">
      <img src={dehydrator} alt="" className="details-card__selected-image" />
      <div className="details-card__images">
        {detailType === 'About the product' && (
          <ul className="details-card__images-list">
            <li className="details-card__images-item">
              <img src={dehydrator} alt="" className="details-card__image" />
            </li>
            <li className="details-card__images-item">
              <img src={dehydrator} alt="" className="details-card__image" />
            </li>
            <li className="details-card__images-item">
              <img src={dehydrator} alt="" className="details-card__image" />
            </li>
            <li className="details-card__images-item">
              <img src={dehydrator} alt="" className="details-card__image" />
            </li>
          </ul>
        )}
      </div>
      <div className="container">
        <p className="product__code">Code: FD500</p>
        <h6 className="product__title">Dehydrator Teploceramic FD500 </h6>
        <div className="product-price__wrapper">
          <div className="item__old-conditions">
            <p className="item__old-price">450 €</p>
            <p className="item__discount">-35%</p>
          </div>
          <p className="item__price">210 €</p>
        </div>
        <button className="details-card__button button primary-button">Add to card</button>
      </div>
    </div>
  );
}
