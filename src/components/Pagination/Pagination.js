import './pagination.scss';

export const Pagination = () => {
  return (
    <section className="pagination">
      <div className="container">
        <div className="pagination__content main__text--regular">
          <button className="pagination__nav-button prev icon"></button>
          <ul className="pagination__list">
            <li className="pagination__item">
              <button className="pagination__button pagination__button_active">1</button>
            </li>
            <li className="pagination__item">
              <button className="pagination__button">2</button>
            </li>
            <li className="pagination__item">
              <button className="pagination__button">3</button>
            </li>
            <li className="pagination__item">
              <button className="pagination__button">4</button>
            </li>
          </ul>
          <button className="pagination__nav-button next icon"></button>
        </div>
      </div>
    </section>
  );
}
