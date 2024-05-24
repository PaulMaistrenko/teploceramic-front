import { useContext, useEffect } from "react";
import { AllProductsPageHeader } from "../../components/AllProductsPageHeader";
import { Pagination } from "../../components/Pagination";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsList } from "../../components/ProductsList";
import { ProductsSlider } from "../../components/ProductsSlider";
import { QuestionsBlock } from "../../components/QuestionsBlock/QuestionsBlock";
import './accessories.scss';
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";

export const AccessoriesPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Accessories');
  });

  return (
    <div className="accessories__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="accessories" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="accessories" />
    </div>
  );
}
