import classNames from 'classnames';
import './specifications.scss';

export const Specifications = ({ detailType, isClippedSpecification }) => {

  return (
    <div className="specifications-info__block">
      <p className="specifications-block__title">specifications</p>
      <div className={
          classNames(
           "options__list-screen", { "specifications-clipped": (isClippedSpecification && detailType === 'About the product') },
          )
        }
      >
      <ul className="options__list">
        <li className="options-list__item">
          <p className="option">Volume</p>
          <p className="option__value">30 l</p>
        </li>
        <li className="options-list__item">
          <p className="option">Size</p>
          <p className="option__value">30 x 37 x 30 cm</p>
        </li>
        <li className="options-list__item">
          <p className="option">Color</p>
          <p className="option__value">Silver</p>
        </li>
        <li className="options-list__item">
          <p className="option">Construction</p>
          <p className="option__value">Horizontal fan</p>
        </li>
        <li className="options-list__item">
          <p className="option">Drying area</p>
          <p className="option__value">0,45 m²</p>
        </li>
        <li className="options-list__item">
          <p className="option">Drying system</p>
          <p className="option__value">Convective</p>
        </li>
        <li className="options-list__item">
          <p className="option">Number of temperature modes</p>
          <p className="option__value">60</p>
        </li>
        <li className="options-list__item">
          <p className="option">Drying temperature</p>
          <p className="option__value">40-70 C°</p>
        </li>
        <li className="options-list__item">
          <p className="option">Weight</p>
          <p className="option__value">8 kg</p>
        </li>
        <li className="options-list__item">
          <p className="option">Control type</p>
          <p className="option__value">Digital</p>
        </li>
        <li className="options-list__item">
          <p className="option">Number of pallets</p>
          <p className="option__value">8</p>
        </li>
        <li className="options-list__item">
          <p className="option">Fan location</p>
          <p className="option__value">From the side</p>
        </li>
        <li className="options-list__item">
          <p className="option">Length of the cord</p>
          <p className="option__value">1,6 m</p>
        </li>
        <li className="options-list__item">
          <p className="option">Country of brand registration</p>
          <p className="option__value">Ukraine</p>
        </li>
        <li className="options-list__item">
          <p className="option">Warranty</p>
          <p className="option__value">12 months</p>
        </li>
        <li className="options-list__item">
          <p className="option">Country of origin of the goods</p>
          <p className="option__value">Ukraine</p>
        </li>
      </ul>
      </div>
    </div>
  );
}
