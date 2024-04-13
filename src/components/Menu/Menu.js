import classNames from "classnames";
import { NavLink } from "react-router-dom";

export const Menu = ({ isMenuOpen }) => {
  return (
    <nav className={classNames('menu__page', { active : isMenuOpen })}>
        <div className="container">
          <ul className="menu__list main__text--medium">
            <li className="menu__item">
              <NavLink to="/dehydrators" className="menu__link text-color--neutralN400">Dehydrators</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/heaters" className="menu__link text-color--neutralN400">Heaters</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/suspended heaters" className="menu__link text-color--neutralN400">Suspended heaters</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/towel warmers" className="menu__link text-color--neutralN400">Towel warmers</NavLink>
            </li>
            <li className="menu__item">
              <NavLink to="/accessories" className="menu__link text-color--neutralN400">Accessories</NavLink>
            </li>
          </ul>
          <div className="nav__bottom-actions secondary__text--regular">
            <div className="information__block">
              <NavLink to="/about" className="menu__link text-color--neutralN300">About</NavLink>
              <NavLink to="/help" className="menu__link text-color--neutralN300">Help</NavLink>
            </div>
            <button className="language-selector text-color--neutralN300">English</button>
          </div>
        </div>
      </nav>
  );
}
