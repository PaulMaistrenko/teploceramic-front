import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { MenuPage } from './components/MenuPage';
import { Footer } from './components/Footer';
import classNames from 'classnames';
import { useContext } from 'react';
import { MainContext } from './context/MainContext';

export const App = () => {
  const {
    isMenuOpen,
    isFiltersPageOpen,
  } = useContext(MainContext);

  return (
    <div className={classNames('app', {'app--background-dark': isMenuOpen || isFiltersPageOpen})}>
      <Header />
      <MenuPage />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

