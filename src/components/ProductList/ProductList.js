import { ProductItem } from '../ProductItem';
import './product-list.scss';

export const ProductList = () => {
  return (
    <ul className="product__list container">
      <li className="product__item">
        <ProductItem />
      </li>
      <li className="product__item">
        <ProductItem />
      </li>
      <li className="product__item">
        <ProductItem />
      </li>
      <li className="product__item">
        <ProductItem />
      </li>
      <li className="product__item">
        <ProductItem />
      </li>
    </ul>
  );
}
