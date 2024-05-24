import { Link } from 'react-router-dom';
import './footer.scss';
import { scrollToTop } from '../../services/scrollToTop';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Link
            to="/"
            className="footer__main-logo bgd-icon"
            onClick={scrollToTop}
          />
          <ul className="socials__list">
            <li className="social__item">
              <Link to="/" className="facebook social__link bgd-icon" />
            </li>
            <li className="social__item">
              <Link to="/" className="instagram social__link bgd-icon" />
            </li>
            <li className="social__item">
              <Link to="/" className="youtube social__link bgd-icon" />
            </li>
            <li className="social__item">
              <Link to="/" className="telegram social__link bgd-icon" />
            </li>
          </ul>
        </div>
        <nav className="footer__nav">
          <h3 className="footer__nav-title">Catalog</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link
                to="/dehydrators"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Dehydrators
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/heaters"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Heaters
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/suspended heaters"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Suspended heaters
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/towel warmers"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Towel warmers
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/accessories"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Accessories
              </Link>
            </li>
          </ul>
          <h3 className="footer__nav-title">Support</h3>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link
                to="/warranty and service"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Warranty and service
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/return of goods"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Return of goods
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/payment and delivery"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Payment and delivery
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link
                to="/terms and conditions"
                className="footer__nav-link"
                onClick={scrollToTop}
              >
                Terms and conditions
              </Link>
            </li>
          </ul>
        </nav>
        <div className="footer__bottom">
          <div className="feedback">
            <p className="feedback__text">Got a question?</p>
            <p className="feedback__field-title">Contact</p>
            <Link
              to="/info@teploceramic.com"
              type="email"
              className="feedback__link"
              target='_blank'
            >
              info@teploceramic.com
            </Link>
          </div>
          <p className="rights">© 2011–2024 TEPLOCERAMICA</p>
        </div>
      </div>
    </footer>
  );
}
