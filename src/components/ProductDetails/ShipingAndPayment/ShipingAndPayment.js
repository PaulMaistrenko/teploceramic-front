import './shiping-and-payment.scss';

export const ShipingAndPayment = () => {
  return (
    <section className="trade-conditions-info__block">
      <div className="trade-conditions__texts">
        <p className="trade-conditions-block__title">SHIPPING AND PAYMENT</p>
        <p className="trade-conditions__text">
          Our manager will inform you of the exact cost of delivery and payment method after placing the order.
        </p>
        <p className="trade-conditions-block__title">APPROXIMATE COST OF DELIVERY</p>
        <p className="trade-conditions__text">
          Enter your address and we will calculate the cost of delivery in the most optimal way.
        </p>
      </div>
      <div className="trade-conditions-selectors__block">
        <div className="trade-conditions__selector">
          <p className="destination-selector__title">Country</p>
          <div className="destination-selector__values">
            <p className="destination-selector__placeholder">Select</p>
            <button className="destination-selector__button bgd-icon" />
          </div>
        </div>
        <div className="trade-conditions__selector">
          <p className="destination-selector__title">City</p>
          <div className="destination-selector__values">
            <p className="destination-selector__placeholder">Select</p>
            <button className="destination-selector__button bgd-icon" />
          </div>
        </div>
      </div>
      <button className="trade-conditions__button button primary-button">Calculate</button>
      <div className="trade-condition__result">
        <p className="result__text">Approximate cost of delivery</p>
        <div className="result__field">35 €</div>
      </div>
    </section>
  );
}
