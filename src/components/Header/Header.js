import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MainContext } from "../../context/MainContext";

export const Header = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
  } = useContext(MainContext);

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
