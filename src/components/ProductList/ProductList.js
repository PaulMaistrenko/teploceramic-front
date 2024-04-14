import { ProductItem } from '../ProductItem';

export const ProductList = () => {
  return (
    <div className="all-products__page">
      <div className="container">
        <div className="all-products__top">
          <div className="all-products__info"></div>
          <div className="all-products__actions"></div>
        </div>
        <ul className="product__list">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </ul>
      </div>
    </div>
  );
}
