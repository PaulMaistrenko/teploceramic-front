import { useNavigate } from 'react-router-dom';
import './product-details-page.scss';
import { useContext, useRef, useState } from 'react';
import { detailTypes } from '../../variables';
import classNames from 'classnames';
import { ProductDetailsCard } from '../../components/ProductDetailsCard';
import { Description } from '../../components/ProductDetails/Description';
import { ProductsSlider } from '../../components/ProductsSlider';
import { Specifications } from '../../components/ProductDetails/Specifications';
import { Availability } from '../../components/ProductDetails/Availability';
import { ShipingAndPayment } from '../../components/ProductDetails/ShipingAndPayment';
import { MainContext } from '../../context/MainContext';

export const ProductDetailsPage = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  const scrollWidth = useRef(null);
  const navigate = useNavigate();
  const [detailType, setDetailType] = useState('About the product');
  const [currentShiftToggler, setCurrentShiftToggler] = useState(0);
  const [currentShiftList, setCurrentShiftList] = useState(0);
  const [isClippedDescription, setIsClippedDescription] = useState(true);
  const [isClippedSpecification, setIsClippedSpecification] = useState(true);

  const getShift = (detailValue) => {
    const toddlerWidth = 40;
    switch(detailValue) {
      case ('About the product'): 
        setCurrentShiftToggler(0);
        setCurrentShiftList(0);
        break;
      case ('Description'):
        setCurrentShiftToggler(scrollWidth.current.getBoundingClientRect().width * 0.25 - toddlerWidth / 2);
        setCurrentShiftList(80);
        break;
      case ('Specifications'):
        setCurrentShiftToggler(scrollWidth.current.getBoundingClientRect().width * 0.5 - toddlerWidth / 2);
        setCurrentShiftList(197);
        break;
      case ('Availability'):
        setCurrentShiftToggler(scrollWidth.current.getBoundingClientRect().width * 0.75 - toddlerWidth / 2);
        setCurrentShiftList(335);
        break;
      case ('Shipping and payment'): 
        setCurrentShiftToggler(scrollWidth.current.getBoundingClientRect().width - toddlerWidth);
        setCurrentShiftList(436);
        break;
      default: break;
    }
  };

  return (
    <div className="product-details__page">
      <div className="container">
        <div className="product-page__path">
          <button
            type="button"
            className="back__button icon"
            onClick={() => navigate(-1)}
          />
          <p className="current__page">{currentPage}</p>
        </div>
        <ul
          className="product-info__nav-list"
          style={{ right: `${currentShiftList}px` }}
        >
          {detailTypes.map(detail => (
            <li className="product-info__item" key={detail}>
              <button
                type="button"
                className={
                  classNames(
                    "product-info__item-handler", { selected: detail === detailType },
                  )
                }
                onClick={() => {
                    setDetailType(detail);
                    getShift(detail);
                  }
                }
              >
                {detail}
              </button>
            </li>
            )
          )}
        </ul>
        <div className="product-info__scroll-bar" ref={scrollWidth}>
          <div
            className="product-info__toddler"
            style={{ left: `${currentShiftToggler}px` }}
          />
        </div>
      </div>
      <ProductDetailsCard detailType={detailType} />
      <div className="container">
        <section className="product-details__section">
          { detailType === 'About the product' && <Description detailType={detailType} isClippedDescription={isClippedDescription} />}
          { detailType === 'Description' && <Description detailType={detailType} isClippedDescription={isClippedDescription} />}
          { detailType === 'About the product' && (
            <button
              className="more-info__button"
              onClick={() => setIsClippedDescription(!isClippedDescription)}
            >
              More info
            </button>
            )
          }
        </section>
        <section className="product-details__section">
          { detailType === 'About the product' && <Specifications detailType={detailType} isClippedSpecification={isClippedSpecification} />}
          { detailType === 'Specifications' && <Specifications detailType={detailType} isClippedSpecification={isClippedSpecification} />}
          { detailType === 'About the product' && (
            <button
              className="more-info__button"
              onClick={() => setIsClippedSpecification(!isClippedSpecification)}
            >
              More info
            </button>
            )
          }
        </section>
        { detailType === 'Availability' && <Availability /> }
        { detailType === 'Shipping and payment' && <ShipingAndPayment /> }
        <div className="product-details__sliders">
          <ProductsSlider title="ACCESSORIES FOR THIS PRODUCT" />
          <ProductsSlider title="RECOMENDED PRODUCTS" />
        </div>
      </div>
    </div>
  );
}
