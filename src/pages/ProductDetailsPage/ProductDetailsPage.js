import { useNavigate } from 'react-router-dom';
import './product-details-page.scss';
import { useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';
import { detailTypes } from '../../variables';

export const ProductDetailsPage = () => {
  const {
    currentPage,
  } = useContext(MainContext);

  const navigate = useNavigate();
  const [typeProductDetail, setTypeProductDetail] = useState('About the product');

  return (
    <div className="product__page">
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
                className="product-info__item-handler product-info__item-active"
                onClick={() => setTypeProductDetail(detail)}
              >
                {detail}
              </button>
            </li>
            )
          )}
        </ul>
        <div className="product-info__scroll-bar"></div>
      </div>
    </div>
  );
}
