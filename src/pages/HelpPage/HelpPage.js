import { Link } from 'react-router-dom';
import { HelpPageTop } from '../../components/HelpPageTop/HelpPageTop';
import './help-page.scss';
import { useContext, useEffect } from 'react';
import { MainContext } from '../../context/MainContext';
import { scrollToTop } from '../../services/scrollToTop';

export const HelpPage = () => {
  const {
    setCurrentPage,
  } = useContext(MainContext)

  useEffect (() => {
    setCurrentPage('Help page');
    scrollToTop();
  });

  return (
    <div className="help__page">
      <HelpPageTop title="WE CAN HELP YOU" />
      <div className="container">
        <div className="help-page__content">
          <ul className="help-page-section__chapters">
            <li className="help-page-section__chapter">
              <h2 className="help-page-section__title">FAQ</h2>
              <div className="help-page-section__links">
                <Link to="/help/dehydrators" className="help-page-section__link">Dehydrators</Link>
                <Link to="/help/heaters" className="help-page-section__link">Heaters</Link>
                <Link to="/help/suspended heaters" className="help-page-section__link">Suspended heaters</Link>
                <Link to="/help/towel warmers" className="help-page-section__link">Towel warmers</Link>
                <Link to="/help/other" className="help-page-section__link">Other</Link>
              </div>
            </li>
            <li className="help-page-section__chapter">
              <h2 className="help-page-section__title">COOPERATION</h2>
              <div className="help-page-section__links">
                <Link to="/help/general provisions" className="help-page-section__link">General provisions</Link>
              </div>
            </li>
            <li className="help-page-section__chapter">
              <h2 className="help-page-section__title">SUPPORT</h2>
              <div className="help-page-section__links">
                <Link to="/help/warranty and service" className="help-page-section__link">Warranty and service</Link>
                <Link to="/help/return of goods" className="help-page-section__link">Return of goods</Link>
                <Link to="/help/payment and delivery" className="help-page-section__link">Payment and delivery</Link>
                <Link to="/help/terms and conditions" className="help-page-section__link">Terms and conditions</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}