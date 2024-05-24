import './availability.scss';

export const Availability = () => {
  return (
    <section className="availability-info__block">
      <p className="availability-block__title">AVAILABILITY</p>
      <div className="storage-areas__buttons">
        <button className="storage-area__button button primary-button primary-button--disabled">Ukraine</button>
        <button className="storage-area__button button primary-button">Poland</button>
      </div>
      <ul className="storage-areas__list">
        <li className="storage-areas__item">
          <div className="storage-area__location">
            <div className="location">
              <div className="adress">Piorunów 16, 05-870 Błonie, Poland</div>
              <div className="qnty">
                <p className="qnty__value">12</p>
                <p className="qnty__unit">Units</p>
              </div>
            </div>
            <p className="storage__area">Warehouse</p>
          </div>
        </li>
        <li className="storage-areas__item">
          <div className="storage-area__location">
            <div className="location">
              <div className="adress">Saska 98/Lokal 1, 03-914 Warszawa, Poland</div>
              <div className="qnty">
                <p className="qnty__value">7</p>
                <p className="qnty__unit">Units</p>
              </div>
            </div>
            <p className="storage__area">Warehouse</p>
          </div>
        </li>
        <li className="storage-areas__item">
          <div className="storage-area__location">
            <div className="location">
              <div className="adress">Juliusza Słowackiego 23, 05-091 Ząbki, Poland</div>
              <div className="qnty">
                <p className="qnty__value">3</p>
                <p className="qnty__unit">Units</p>
              </div>
            </div>
            <p className="storage__area">Warehouse</p>
          </div>
        </li>
      </ul>
    </section>
  );
}
