import { ProductItem } from '../ProductItem';
import './product-list.scss';

export const ProductList = () => {
  return (
    <ul className="product__list">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ul>
  );
}
