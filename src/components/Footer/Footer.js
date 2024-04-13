import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../helpers/scrollToTop";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
          <NavLink
            to="/"
            className="footer__logo icon"
            onClick={scrollToTop}
          />
          <div className="socials">
            <NavLink to="/" className="socials__icon facebook icon" />
            <NavLink to="/" className="socials__icon instagram icon" />
            <NavLink to="/" className="socials__icon youtube icon" />
            <NavLink to="/" className="socials__icon telegram icon" />
          </div>
          <div className="footer__content">
            <p className="footer__title">Catalog</p>
            <ul className="footer__nav footer__catalog">
              <li className="footer__nav-item">
                <NavLink to="/dehydrators" className="footer__nav-link">Dehydrators</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/heaters" className="footer__nav-link">Heaters</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/suspended heaters" className="footer__nav-link">Suspended heaters</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/towel warmers" className="footer__nav-link">Towel warmers</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/accessories" className="footer__nav-link">Accessories</NavLink>
              </li>
            </ul>
            <p className="footer__title">Support</p>
            <ul className="footer__nav">
              <li className="footer__nav-item">
                <NavLink to="/warranty and service" className="footer__nav-link">Warranty and service</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/return of goods" className="footer__nav-link">Return of goods</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/payment and delivery" className="footer__nav-link">Payment and delivery</NavLink>
              </li>
              <li className="footer__nav-item">
                <NavLink to="/terms and conditions" className="footer__nav-link">Terms and conditions</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__bottom">
            <div className="feedback">
              <p className="feedback__text">Got a question?</p>
              <p className="feedback__field-title">Contact</p>
              <NavLink
                to="/info@teploceramic.com"
                type="email"
                className="feedback__link"
              >
                info@teploceramic.com
              </NavLink>
            </div>
            <p className="rights">© 2011–2024 TEPLOCERAMICA</p>
          </div>
      </div>
    </footer>
  );
}
