import './spec-offer-card.scss';
import specOfferImg from '../../temporery-files/special-offers_img.png';

export const SpecOfferCard = () => {
  return (
    <div className="special-offer__card">
      <img src={specOfferImg} alt="spec-card" className="special-item__img" />
      <div className="special-item__info">
        <p className="special-item__code">Code: 2588451</p>
        <h3 className="special-item__name">TEPLOCERAMIC TC500BC+</h3>
        <p className="special-item__color">Black</p>
      </div>
      <div className="special-item__prices">
        <div className="special-item__old-conditions">
          <p className="special-item__old-price">450 €</p>
          <p className="special-item__discount">-35%</p>
        </div>
        <p className="special-item__price">349 €</p>
      </div>
      <button className="special-item__button button primary-button">Buy Now</button>
    </div>
  );
}
