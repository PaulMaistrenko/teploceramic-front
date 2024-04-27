import './availability-block.scss';

export const AvailabilityBlock = () => {
  return (
    <section className="availability__info-block">
      <div className="container">
        <p className="description__block-title large__text--medium text-color--neutralN500">AVAILABILITY</p>
        <div className="storage-areas__buttons">
          <button className="storage-area__button button main__button-primary_extra-small main__button-primary">Ukraine</button>
          <button className="storage-area__button button main__button-primary_extra-small main__button-primary">Poland</button>
        </div>
        <ul className="storage-areas__list">
          <li className="storage-areas__item">
            <div className="storage-area__location">
              <div className="location">
                <div className="adress main__text--medium text-color--neutralN400">Piorunów 16, 05-870 Błonie, Poland</div>
                <div className="qnty text-color--successSC90 secondary__text--medium">
                  <p className="qnty__value">12</p>
                  <p className="qnty__unit">Units</p>
                </div>
              </div>
              <p className="storage__area text-color--neutralN350 secondary__text--regular">Warehouse</p>
            </div>
          </li>
          <li className="storage-areas__item">
            <div className="storage-area__location">
              <div className="location">
                <div className="adress main__text--medium text-color--neutralN400">Saska 98/Lokal 1, 03-914 Warszawa, Poland</div>
                <div className="qnty text-color--successSC90 secondary__text--medium">
                  <p className="qnty__value">7</p>
                  <p className="qnty__unit">Units</p>
                </div>
              </div>
              <p className="storage__area text-color--neutralN350 secondary__text--regular">Warehouse</p>
            </div>
          </li>
          <li className="storage-areas__item">
            <div className="storage-area__location">
              <div className="location">
                <div className="adress main__text--medium text-color--neutralN400">Juliusza Słowackiego 23, 05-091 Ząbki, Poland</div>
                <div className="qnty text-color--successSC90 secondary__text--medium">
                  <p className="qnty__value">3</p>
                  <p className="qnty__unit">Units</p>
                </div>
              </div>
              <p className="storage__area text-color--neutralN350 secondary__text--regular">Warehouse</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
