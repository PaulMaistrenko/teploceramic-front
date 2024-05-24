import { Link } from "react-router-dom";
import { ProductCard } from "../ProductCard";
import './product-slider.scss';
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

export const ProductsSlider = ({title = "recomended products"}) => {
  const {
    currentPage,
  } = useContext(MainContext);

  

  return (
    <section className="products-slider">
      <div className="product-slider__top">
        <h2 className="product-slider__title">{title}</h2>
        {currentPage !== 'Home'
          ? (<div className="slider__nav-buttons">
              <button
                 className="slider__nav-button prev bgd-icon"
              />
              <button
                className="slider__nav-button next bgd-icon"
              />
            </div>
            )
          : (<Link to="/heaters" className="product-slider__link">show all</Link>)
        }
      </div>
      <div className="products-slider__screen">
        <ul className="slide__list">
          <li className="slide__item">
            <ProductCard />
          </li>
          <li className="slide__item">
            <ProductCard />
          </li>
          <li className="slide__item">
            <ProductCard />
          </li>
          <li className="slide__item">
            <ProductCard />
          </li>
          <li className="slide__item">
            <ProductCard />
          </li>
        </ul>
      </div>
    </section>
  );
}
