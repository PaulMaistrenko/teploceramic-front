import classNames from 'classnames';
import './specifications-info-block.scss';

export const SpecificationsInfoBlock = ({ detailType, isClippedSpecification }) => {

  return (
    <div className="specifications__info-block">
      <div className="container">
        <p className="specifications__block-title large__text--medium text-color--neutralN500">specifications</p>
        <div className={
            classNames(
              "options__list-screen", { "specifications-clipped": (isClippedSpecification && detailType === 'About the product') },
            )
          }
        >
        <ul className="options__list">
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Volume</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">30 l</p>
          </li>
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Size</p>
            <p className="option__value main__text--medium text-color--neutralN400">30 x 37 x 30 cm</p>
          </li>
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Color</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Silver</p>
          </li>
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Construction</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Horizontal fan</p>
          </li>
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Drying area</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">0,45 m²</p>
          </li>
          <li className="options-list__item">
            <p className="option main__text--regular text-color--neutralN350">Drying system</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Convective</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Number of temperature modes</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">60</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Drying temperature</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">40-70 C°</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Weight</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">8 kg</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Control type</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Digital</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Number of pallets</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">8</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Fan location</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">From the side</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Length of the cord</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">1,6 m</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Country of brand registration</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Ukraine</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Warranty</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">12 months</p>
          </li>
          <li className="options-list__item">
            <p className="option option main__text--regular text-color--neutralN350">Country of origin of the goods</p>
            <p className="option__value option__value main__text--medium text-color--neutralN400">Ukraine</p>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}
