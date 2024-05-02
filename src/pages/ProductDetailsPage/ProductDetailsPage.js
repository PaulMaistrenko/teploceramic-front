import { useNavigate } from 'react-router-dom';
import './product-details-page.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { detailTypes } from '../../variables';
import classNames from 'classnames';
import { ProductDetailsCard } from '../../components/ProductDetailsCard';
import { DescriptionInfoBlock } from '../../components/DescriptionInfoBlock/DescriptionInfoBlock';
import { ProductsSlider } from '../../components/ProductsSlider/ProductSlider';
import { QuestionsBlock } from '../../components/QuestionsBlock';
import { SpecificationsInfoBlock } from '../../components/SpecificationsInfoBlock/SpecificationInfoBlock';
import { AvailabilityBlock } from '../../components/AvailabilityBlock/AvailabilityBlock';
import { ShipingAndPaymentBlock } from '../../components/ShipingAndPaymentBlock/ShipingAndPaymentBlock';

export const ProductDetailsPage = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  const scrollWidth = useRef(null);
  const navigate = useNavigate();
  const [detailType, setDetailType] = useState('About the product');
  const [currentShiftToggler, setCurrentShiftToggler] = useState(0);
  const [currentShiftList, setCurrentShiftList] = useState(0);

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

  console.log(currentShiftList);

  return (
    <div className="product__details-page">
      <div className="container">
        <div className="product__page-path">
          <button
            type="button"
            className="back__button icon"
            onClick={() => navigate(-1)}
          />
          <p className="current__page text-color--neutralN300">{currentPage}</p>
        </div>
      </div>
      <div className="container">
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
      {(detailType === 'Description' || detailType === 'About the product') && <DescriptionInfoBlock />}
      {(detailType === 'Specifications' || detailType === 'About the product') && <SpecificationsInfoBlock />}
      {detailType === 'Availability' && <AvailabilityBlock />}
      {detailType === 'Shipping and payment' && <ShipingAndPaymentBlock />}
      <ProductsSlider title="ACCESSORIES FOR THIS PRODUCT" />
      <ProductsSlider title="RECOMENDED PRODUCTS" />
      <QuestionsBlock />
    </div>
  );
}
