import { useContext, useEffect } from "react";
import { AllProductsPageHeader } from "../../components/AllProductsPageHeader";
import { Pagination } from "../../components/Pagination";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsList } from "../../components/ProductsList";
import { ProductsSlider } from "../../components/ProductsSlider";
import { QuestionsBlock } from "../../components/QuestionsBlock/QuestionsBlock";
import './suspended-heaters-page.scss';
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";

export const SuspendedHeatersPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Suspended heaters');
  });

  return (
    <div className="suspended-heaters__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="suspended heaters" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="suspended heaters" />
    </div>
  );
}
