import { Link } from "react-router-dom";

export const ProductsInfo = () => {
  return (
    <section className="products__info">
      <div className="page__path">
        <Link to="/" className="home__link icon" />
        <div className="slach icon">/</div>
        <p className="current__page">Dehydrators</p>
      </div>
      <h6 className="page__title text-color--primaryP500">DEHYDRATORS</h6>
      <div className="questions__block">
        <div className="questions__item">
          <div className="question__text large__text--regular">What is a dehydrator?</div>
          <button className="questions__button icon"></button>
        </div>
        <div className="questions__item">
          <div className="question__text large__text--regular">What types of dehydrators are there?</div>
          <button className="questions__button icon"></button>
        </div>
      </div>
    </section>
  );
}
