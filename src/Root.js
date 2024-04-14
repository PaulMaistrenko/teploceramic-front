import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { DehydratorsPage } from './pages/DehydratorsPage';
import { HeatersPage } from './pages/HeatersPage';
import { SuspendetHeatersPage } from './pages/SuspendetHeatersPage';
import { TowelWarmersPage } from './pages/TowelWarmersPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={ <App />}>
        <Route index element={<HomePage />} />
        <Route path="dehydrators" element={<DehydratorsPage />} />
        <Route path="heaters" element={<HeatersPage />} />
        <Route path="suspended heaters" element={<SuspendetHeatersPage />} />
        <Route path="towel warmers" element={<TowelWarmersPage />} />
        <Route path="accessories" element={<AccessoriesPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  </Router>
);