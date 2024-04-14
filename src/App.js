import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export const App = () => {

  return (
    <div className="page__body">
      <Header />
      <Menu />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
