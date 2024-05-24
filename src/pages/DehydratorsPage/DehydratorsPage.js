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

export const DehydratorsPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Dehydrators');
  });

  return (
    <div className="dehydrators__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="dehydrators" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="dehydrators" />
    </div>
  );
}
