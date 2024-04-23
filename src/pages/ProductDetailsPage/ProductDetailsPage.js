import { useNavigate } from 'react-router-dom';
import './product-details-page.scss';
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { detailTypes } from '../../variables';
import classNames from 'classnames';
import { ProductDetailsCard } from '../../components/ProductDetailsCard';
import { DescriptionInfoBlock } from '../../components/DescriptionInfoBlock/DescriptionInfoBlock';
import { ProductsSlider } from '../../components/ProductsSlider/ProductSlider';
import { QuestionsBlock } from '../../components/QuestionsBlock';
import { SpecificationsInfoBlock } from '../../components/SpecificationsInfoBlock/SpecificationInfoBlock';
import { AvailabilityBlock } from '../../components/AvailabilityBlock/AvailabilityBlock';

export const ProductDetailsPage = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  const navigate = useNavigate();
  const [detailType, setDetailType] = useState('About the product');

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
        <ul className="product-info__nav-list">
          {detailTypes.map(detail => (
            <li className="product-info__item" key={detail}>
              <button
                type="button"
                className={
                  classNames(
                    "product-info__item-handler", { selected: detail === detailType },
                  )
                }
                onClick={() => setDetailType(detail)}
              >
                {detail}
              </button>
            </li>
            )
          )}
        </ul>
        <div className="product-info__scroll-bar"></div>
      </div>
      <ProductDetailsCard detailType={detailType} />
      {detailType === 'Description' && <DescriptionInfoBlock />}
      {detailType === 'Specifications' && <SpecificationsInfoBlock />}
      {detailType === 'Availability' && <AvailabilityBlock />}
      <ProductsSlider title="ACCESSORIES FOR THIS PRODUCT" />
      <ProductsSlider title="RECOMENDED PRODUCTS" />
      <QuestionsBlock />
    </div>
  );
}
