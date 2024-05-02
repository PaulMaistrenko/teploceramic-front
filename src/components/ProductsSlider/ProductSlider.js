import { useState } from 'react';
import { ProductItem } from '../ProductItem';
import './product-slider.scss';

export const ProductsSlider = ({ title }) => {
  const [transform, setTransform] = useState(0);

  const widthOneCard = 304;
  let maxTransform = -(5 * widthOneCard) + widthOneCard;

  const handleLeftShift = () => {
    setTransform((prev) => prev + widthOneCard);
  };

  const handleRightShift = () => {
    setTransform((prev) => prev - widthOneCard);
  };

  return (
    <section className="products__slider">
      <div className="container">
        <div className="slider__top">
          <div className="slider__title large__text--regular text-color--neutralN500">{title}</div>
          <div className="slider__nav-buttons">
            <button
              className="slider__nav-button prev icon"
              onClick={handleLeftShift}
              disabled={transform === 0}
            />
            <button
              className="slider__nav-button next icon"
              onClick={handleRightShift}
              disabled={transform === maxTransform}
            />
          </div>
        </div>
        <div className="slider__screen">
          <ul
            className="slider__list"
            style={{ transform: `translateX(${transform}px)` }}
          >
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
