import { productCategories } from '../../variables';
import './questions-block.scss';

export const QuestionsBlock = ({title}) => {
  return (
    <section className="questions__section">
      <div className="container">
        <h1 className="section__title">FREQUENTLY ASKED QUESTIONS</h1>
        <ul className="questions__list">
          <li className="questions-list__item">
            <button className="question__button">{`What is a ${productCategories[title][0]}?`}</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">{`What types of ${productCategories[title][1]} are there?`}</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">{`What is a ${productCategories[title][0]}?`}</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">{`What types of ${productCategories[title][1]}} are there?`}</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">{`What is a ${productCategories[title][0]}?`}</button>
          </li>
          <li className="questions-list__item--selected">
            <button className="question__button">More information</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
