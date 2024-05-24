import { Link } from "react-router-dom";
import './menu-page.scss';
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";
import classNames from "classnames";
import { Header } from "../Header/Header";
import { SelectLanguageWindow } from "../SelectLanguageWindow";

export const MenuPage = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    currentLang,
    isSelectLangOpen,
    setIsSelectLangOpen,
  } = useContext(MainContext);

  return (
    <div className={classNames('menu__page', { 'menu__page--active': isMenuOpen }, {'menu__page--dark': isSelectLangOpen})}>
      <Header />
      {isSelectLangOpen && <SelectLanguageWindow />}
      <nav>
        <div className="container">
          <ul className="menu__list">
            <li className="menu__item">
              <Link
                to="/dehydrators"
                className="menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Dehydrators
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/heaters"
                className="menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Heaters
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/suspended heaters"
                className="menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Suspended heaters
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/towel warmers"
                className="menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Towel warmers
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/accessories"
                className="menu__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
            </li>
          </ul>
          <div className="menu__bottom">
            <div className="common__info">
              <Link
                to="/about"
                className="about__link"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/help"
                className="help__link"
                onClick={() => setIsMenuOpen(false)}
              >
                Help
              </Link>
            </div>
            <div className="language-selector">
              <div className="language__value">{currentLang}</div>
              <button
                className="language-selector__button bgd-icon"
                onClick={() => setIsSelectLangOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
