import { Link } from 'react-router-dom';
import './help-page-top.scss';

export const HelpPageTop = ({ title }) => {
  return (
    <div className="help-page__top">
      { title === 'FAQ' 
        ? (
          <div className="help-page__back-link container">
            <Link to="/help" className="help-page__link bgd-icon" />
            <h1 className="help-page__title">{title}</h1>
          </div>
          )
        : <h1 className="help-page__title">{title}</h1>
      }
    </div>
  );
}
