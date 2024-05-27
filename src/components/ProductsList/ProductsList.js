import { ProductCard } from '../ProductCard';
import './products-list.scss';

export const ProductsList = () => {

  return (
    <section className="products-section">
      <ul className="products__list">
        <li className="products__item">
          <ProductCard />
        </li>
        <li className="products__item">
          <ProductCard />
        </li>
        <li className="products__item">
          <ProductCard />
        </li>
        <li className="products__item">
          <ProductCard />
        </li>
        <li className="products__item">
          <ProductCard />
        </li>
        <li className="products__item">
          <ProductCard />
        </li>
      </ul>
    </section>
  );
}
