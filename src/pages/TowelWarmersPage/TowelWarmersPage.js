import { useContext, useEffect } from "react";
import { AllProductsPageHeader } from "../../components/AllProductsPageHeader";
import { Pagination } from "../../components/Pagination";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsList } from "../../components/ProductsList";
import { ProductsSlider } from "../../components/ProductsSlider";
import { QuestionsBlock } from "../../components/QuestionsBlock/QuestionsBlock";
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";

export const TowelWarmersPage = () => {
  const {
    setCurrentPage,
    isFiltersPageOpen,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Towel warmers');
  });

  return (
    <div className="towel-warmers__page">
      {isFiltersPageOpen && <FiltersPage />}
      <AllProductsPageHeader title="towel warmers" />
      <div className="container">
        <ProductsFilter />
        <ProductsList />
        <Pagination />
        <ProductsSlider />
      </div>
      <QuestionsBlock title="towel warmers" />
    </div>
  );
}
