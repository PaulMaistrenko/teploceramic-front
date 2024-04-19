import { ProductItem } from '../ProductItem';

export const ProductList = () => {
  return (
    <ul className="product__list">
      <div className="container">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </ul>
  );
}
