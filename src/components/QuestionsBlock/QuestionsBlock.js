import './questions-block.scss';

export const QuestionsBlock = () => {
  return (
    <section className="questions__section">
      <div className="container">
        <h6 className="section__title medium_line-height--120 text-color--primaryP500">FREQUENTLY ASKED QUESTIONS</h6>
        <ul className="questions__list large__text--regular text-color--neutralN300">
          <li className="questions-list__item">
            <button className="question__button">What is a dehydrator?</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">What types of dehydrators are there?</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">What is a dehydrator?</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">What types of dehydrators are there?</button>
          </li>
          <li className="questions-list__item">
            <button className="question__button">What is a dehydrator?</button>
          </li>
          <li className="questions-list__item questions-list__item--selected">
            <button className="question__button">More information</button>
          </li>
        </ul>
      </div>
    </section>
  );
}
