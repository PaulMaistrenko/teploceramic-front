import { ProductItem } from '../ProductItem';
import './product-list.scss';


export const ProductList = () => {
  
  return (
    <ul className="product__list container">
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </ul>
  );
}
