import { Link } from "react-router-dom";
import './footer.scss';
import { scrollToTop } from "../../helpers/scrollToTop";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
          <Link
            to="/"
            className="footer__logo icon"
            onClick={scrollToTop}
          />
          <div className="socials">
            <Link
              to="/"
              className="socials__icon facebook icon"
              target="_blank"
            />
            <Link
              to="/"
              className="socials__icon instagram icon"
              target="_blank"
            />
            <Link
              to="/"
              className="socials__icon youtube icon"
              target="_blank"
            />
            <Link
              to="/"
              className="socials__icon telegram icon"
              target="_blank"
            />
          </div>
          <div className="footer__content">
            <p className="footer__title">Catalog</p>
            <ul className="footer__nav footer__catalog">
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
            <p className="footer__title">Support</p>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <Link to="/warranty and service" className="footer__nav-link">Warranty and service</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/return of goods" className="footer__nav-link">Return of goods</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/payment and delivery" className="footer__nav-link">Payment and delivery</Link>
              </li>
              <li className="footer__nav-item">
                <Link to="/terms and conditions" className="footer__nav-link">Terms and conditions</Link>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <div className="feedback">
              <p className="feedback__text">Got a question?</p>
              <p className="feedback__field-title">Contact</p>
              <Link
                to="/info@teploceramic.com"
                type="email"
                className="feedback__link"
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
