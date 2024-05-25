import { useContext, useEffect } from 'react';
import { AllProductsPageHeader } from '../../components/AllProductsPageHeader';
import { Pagination } from '../../components/Pagination';
import { ProductsFilter } from '../../components/ProductsFilter';
import { ProductsList } from '../../components/ProductsList';
import { ProductsSlider } from '../../components/ProductsSlider';
import './dehydrators-page.scss';
import { MainContext } from '../../context/MainContext';
import { QuestionsBlock } from '../../components/QuestionsBlock/QuestionsBlock';
import { FiltersPage } from '../../components/FiltersPage/FiltersPage';
import { scrollToTop } from '../../services/scrollToTop';

export const DehydratorsPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Dehydrators');
    scrollToTop();
  });

  return (
    <div className="dehydrators__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="Dehydrators" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="Dehydrators" />
    </div>
  );
}
