import { Link } from 'react-router-dom';
import './all-products-page-header.scss';
import { productCategories } from '../../variables/variables';

export const AllProductsPageHeader = ({title}) => {
  return (
    <section className="all-products-page-header">
      <div className="container">
        <div className="path-block">
          <Link to="/" className="home-link bgd-icon" />
          <p className="slash-symbol">/</p>
          <p className="current-products-type">{title.charAt(0).toUpperCase() + title.slice(1)}</p>
        </div>
        <h1 className="page__title">{title}</h1>
        <ul className="questions__list">
          <li className="questions__item">
            <button className="question-content">{`What is a ${productCategories[title][0]}?`}</button>
          </li>
          <li className="questions__item">
            <button className="question-content">{`What types of ${productCategories[title][1]} are there?`}</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
