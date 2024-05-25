import { useContext, useEffect } from 'react';
import { CartPageTop } from '../../components/CartPageTop';
import './place-an-order-page.scss';
import { MainContext } from '../../context/MainContext';
import { CartItem } from '../../components/CartItem';
import { OrderTotal } from '../../components/OrderTotal';
import ukr_flag from '../../assets/images/blocks/place-an-order/flags/ukr.svg';
import { scrollToTop } from '../../services/scrollToTop';

export const PlaceAnOrderPage = () => {
  const {
    setCurrentPage,
  } = useContext(MainContext)

  useEffect (() => {
    setCurrentPage('Place an order');
    scrollToTop();
  });

  return (
    <div className="place-an-order__page">
      <div className="container">
        <CartPageTop />
        <ul className="order__list">
          <li className="order__item">
            <CartItem />
          </li>
          <li className="order__item">
            <CartItem />
          </li>
          <li className="order__item">
            <CartItem />
          </li>
          <li className="order__item">
            <CartItem />
          </li>
        </ul>
        <OrderTotal />
        <div className="order-information">
          <h2 className="order-information__title">ORDER INFORMATION</h2>
          <div className="order-information__instruction">Fill in the form fields and click
            "Confirm the Order" Our manager will contact you to agree on a method of payment
            and delivery.
          </div>
          <div className="order-information__block">
            <form method="POST" action="/" className="form__field">
              <h3 className="order-information__subtitle">Personal info</h3>
              <div className="personal-info">
                <label htmlFor="name" className="input-title">Name</label>
                <input
                  className="name-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                />
                <label htmlFor="phone" className="input-title">Phone</label>
                <div className="phone-input">
                  <button className="country-code__selector bgd-icon">
                    <img src={ukr_flag} alt="ukr" className="country-code__flag" />
                  </button>
                  <p className="country-code__value">+380</p>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="00-000-00-00"
                  />
                </div>
              </div>
              <h3 className="order-information__subtitle">Delivery info</h3>
              <div className="delivery-info">
                <div className="select__form">
                  <p className="select__title">Country</p>
                  <button className="select__field">Select</button>
                </div>
                <div className="select__form">
                  <p className="select__title">City</p>
                  <button className="select__field">Select</button>
                </div>
              </div>
              <button type="submit" className="confirm-order__button button primary-button">Confirm the Order</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
