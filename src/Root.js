import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { DehydratorsPage } from './pages/DehydratorsPage';
import { HeatersPage } from './pages/HeatersPage';
import { SuspendedHeatersPage } from './pages/SuspendedHeatersPage';
import { TowelWarmersPage } from './pages/TowelWarmersPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { CartPage } from './pages/CartPage';
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage';
import { MainProvider } from './context/MainContext';
import { ProductDetailsPage } from './pages/ProductDetailsPage';

export const Root = () => (
  <Router>
    <MainProvider>
      <Routes>
        <Route path="/" element={ <App />}>
          <Route index element={<HomePage />} />
          <Route path="dehydrators">
            <Route index element={<DehydratorsPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="heaters">
            <Route index element={<HeatersPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="suspended heaters">
            <Route index element={<SuspendedHeatersPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="towel warmers">
            <Route index element={<TowelWarmersPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="accessories">
            <Route index element={<AccessoriesPage />} />
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="cart" element={<CartPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </MainProvider>
    
  </Router>
);