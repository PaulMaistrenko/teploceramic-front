import { Link } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";

export const CategoryInfo = ({ currentPage }) => {

  return (
    <section className="products__info">
      <div className="page__path">
        <Link
          to="/" className="home__link icon"
          onClick={scrollToTop}
        />
        <div className="slach icon">/</div>
        <p className="current__page">{currentPage}</p>
      </div>
      <div className="container">
        <h6 className="section__title medium_line-height--120 text-color--primaryP500">{currentPage}</h6>
        <ul className="questions__list large__text--regular text-color--neutralN300">
          <li className="questions-list__item">
            <button className="question__button">What is a dehydrator?</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">What types of dehydrators are there?</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
