import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { useState } from 'react';
import { Footer } from './components/Footer';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="page__body">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <Menu isMenuOpen={isMenuOpen} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
