import { NavLink } from "react-router-dom";

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {

  return (
    <header className="header container">
        <div className="header__content">
          {isMenuOpen 
            ? <button
                className="menu-close__button icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            : <button
                className="menu-open__button icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
          }
          <NavLink to="/" className="header__logo icon" />
          <NavLink to="/cart" className="cart-page__link icon"></NavLink>
        </div>
      </header>
  );
}
