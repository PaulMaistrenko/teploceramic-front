import { useContext, useEffect } from "react";
import { AllProductsPageHeader } from "../../components/AllProductsPageHeader";
import { Pagination } from "../../components/Pagination";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsList } from "../../components/ProductsList";
import { ProductsSlider } from "../../components/ProductsSlider";
import { QuestionsBlock } from "../../components/QuestionsBlock/QuestionsBlock";
import './heaters-page.scss';
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";

export const HeatersPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Heaters');
  });

  return (
    <div className="heaters__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="heaters" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="heaters" />
    </div>
  );
}