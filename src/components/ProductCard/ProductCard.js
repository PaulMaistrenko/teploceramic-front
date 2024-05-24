import { Link } from "react-router-dom";
import dehydrator from "../../temporery-files/dehydrator_exemple.png";
import './product-card.scss';
import { SaleLabel } from "../SaleLabel/SaleLabel";
import { scrollToTop } from "../../services/scrollToTop";

export const ProductCard = () => {

   /* remove after implement api */

   const itemId = 1;

  return (
    <div className="product__card">
      <div className="container">
        <Link
          to={`/${'dehydrators'.toLowerCase()}/${itemId}`}
          className="product__link"
          onClick={scrollToTop}
        >
          <p className="product__code">Code: FD500</p>
          <SaleLabel />
          <img
            className="product__img"
            src={dehydrator}
            alt="img"
          />
          <p className="product__type">Dehydrator</p>
          <p className="product__name">Teploceramic FD500</p>
          <p className="product__color">Silver</p>
        </Link>
        <div className="product__actions">
          <div className="product__prices">
            <div className="old-conditions">
              <p className="old-price">65 €</p>
              <p className="discount">-5%</p>
            </div>
            <p className="current-price">57 €</p>
          </div>
          <button className="add-to-cart__button bgd-icon" />
        </div>
      </div>
    </div>
  );
}
