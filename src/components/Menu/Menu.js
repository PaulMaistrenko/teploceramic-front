import classNames from "classnames";
import { Link } from "react-router-dom";

export const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className={classNames('menu__page', { active : isMenuOpen })}>
        <div className="container">
          <ul className="menu__list main__text--medium">
            <li className="menu__item">
              <Link
                to="/dehydrators"
                className="menu__link text-color--neutralN400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Dehydrators
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/heaters"
                className="menu__link text-color--neutralN400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Heaters
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/suspended heaters"
                className="menu__link text-color--neutralN400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Suspended heaters
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/towel warmers"
                className="menu__link text-color--neutralN400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Towel warmers
              </Link>
            </li>
            <li className="menu__item">
              <Link
                to="/accessories"
                className="menu__link text-color--neutralN400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Accessories
              </Link>
            </li>
          </ul>
          <div className="nav__bottom-actions secondary__text--regular">
            <div className="information__block">
              <Link
                to="/about"
                className="menu__link text-color--neutralN300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                About
              </Link>
              <Link
                to="/help"
                className="menu__link text-color--neutralN300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Help
              </Link>
            </div>
            <button className="language-selector text-color--neutralN300">English</button>
          </div>
        </div>
      </nav>
  );
}
