import dehydrator from '../../temporery-files/dehydrator_exemple.png';
import './product-details-card.scss';

export const ProductDetailsCard = () => {
  return (
    <div className="product__details-card">
      <img src={dehydrator} alt="" className="details-card__selected-image" />
      <div className="details-card__images">
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
      </div>
      <div className="container">
        <p className="product__code secondary__text--regular text-color--neutralN300">Code: FD500</p>
        <h6 className="product__title medium_line-height--120">Dehydrator Teploceramic FD500 </h6>
        <div className="product-price__wrapper">
          <div className="item__old-conditions">
            <p className="item__old-price secondary__text--regular text-color--neutralN300">450 €</p>
            <p className="item__discount secondary__text--regular text-color--dangerDN500">-35%</p>
          </div>
          <p className="item__price">210 €</p>
        </div>
        <button className="details-card__button button main__button-primary main__button-primary_medium">Add to card</button>
      </div>
    </div>
  );
}
