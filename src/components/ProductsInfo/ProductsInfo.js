import { Link } from "react-router-dom";
import './page-title.scss';

export const ProductsInfo = ({ currentPage }) => {

  return (
    <section className="products__info">
      <div className="page__path">
        <Link to="/" className="home__link icon" />
        <div className="slach icon">/</div>
        <p className="current__page">{currentPage}</p>
      </div>
    <h6 className="page__title text-color--primaryP500">{currentPage}</h6>
      <div className="questions__block">
        <div className="questions__item">
          <div className="question__text large__text--regular">{`What is a ${currentPage.toLowerCase()}?`}</div>
          <button className="questions__button icon"></button>
        </div>
        <div className="questions__item">
          <div className="question__text large__text--regular">{`What types of ${currentPage.toLowerCase()} are there?`}</div>
          <button className="questions__button icon"></button>
        </div>
      </div>
    </section>
  );
}
