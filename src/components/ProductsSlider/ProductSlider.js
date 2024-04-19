import { ProductItem } from '../ProductItem';
import './product-slider.scss';

export const ProductsSlider = () => {
  return (
    <section className="products__slider">
      <div className="container">
        <div className="slider__top">
          <div className="slider__title large__text--regular text-color--neutralN500">RECOMENDED PRODUCTS</div>
          <div className="slider__nav-buttons">
            <button className="slider__nav-button prev icon" />
            <button className="slider__nav-button next icon" />
          </div>
        </div>
        <div className="slider__screen">
          <ul className="slider__list">
            <li className="slider__item">
              <ProductItem />
            </li>
            <li className="slider__item">
              <ProductItem />
            </li>
            <li className="slider__item">
              <ProductItem />
            </li>
            <li className="slider__item">
              <ProductItem />
            </li>
            <li className="slider__item">
              <ProductItem />
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
