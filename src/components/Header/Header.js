import { Link } from 'react-router-dom';
import './header.scss';
import { useContext } from 'react';
import { MainContext } from '../../context/MainContext';

export const Header = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setIsSelectLangOpen,
  } = useContext(MainContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          {isMenuOpen
            ? <button
                className="menu-close__button bgd-icon"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                  setIsSelectLangOpen(false)
                }}
              />
            : <button
                className="menu-open__button bgd-icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
          }
          <Link to="/" className="header__main-logo bgd-icon" />
          <Link to="/cart" className="schoping-cart__link bgd-icon" />
        </div>
      </div>
    </header>
  );
}
