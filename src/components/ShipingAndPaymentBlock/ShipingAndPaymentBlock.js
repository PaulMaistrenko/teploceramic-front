import './shiping-and-payment-block.scss';

export const ShipingAndPaymentBlock = () => {
  return (
    <section className="trade-conditions__info-block">
      <div className="container">
        <div className="trade-conditions__texts">
          <p className="trade-conditions__block-title large__text--medium text-color--neutralN500">SHIPPING AND PAYMENT</p>
          <p className="trade-conditions__text text-color--neutralN350">
            Our manager will inform you of the exact cost of delivery and payment method after placing the order.
          </p>
          <p className="trade-conditions__block-title large__text--medium text-color--neutralN500">APPROXIMATE COST OF DELIVERY</p>
          <p className="trade-conditions__text text-color--neutralN350">
            Enter your address and we will calculate the cost of delivery in the most optimal way.
          </p>
        </div>
        <div className="trade-conditions__selectors-block">
          <div className="trade-conditions__selector">
            <p className="destination__selector-title main__text--medium">Country</p>
            <div className="destination__selector-values">
              <p className="destination__selector-placeholder">Select</p>
              <button className="destination__selector-button icon" />
            </div>
          </div>
          <div className="trade-conditions__selector">
            <p className="destination__selector-title main__text--medium">City</p>
            <div className="destination__selector-values">
              <p className="destination__selector-placeholder">Select</p>
              <button className="destination__selector-button icon" />
            </div>
          </div>
        </div>
        <button className="trade-conditions__button button main__button-primary main__button-primary_medium">Calculate</button>
        <div className="trade-condition__result">
          <p className="result__text">Approximate cost of delivery</p>
          <div className="result__field">35 €</div>
        </div>
      </div>
    </section>
  );
}
