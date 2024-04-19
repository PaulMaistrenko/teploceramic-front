import { useContext, useEffect } from "react";
import { ProductsInfo } from "../../components/ProductsInfo";
import { MainContext } from "../../context/MainContext";
import { scrollToTop } from "../../helpers/scrollToTop";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductList } from "../../components/ProductList";
import { Pagination } from "../../components/Pagination";
import { ProductsSlider } from "../../components/ProductsSlider/ProductSlider";

export const HeatersPage = () => {
  const {
    isFiltersPageOpen,
    currentPage,
    setCurrentPage,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Heaters');
    scrollToTop();
  });

  return (
    <div className="products__page">
      {isFiltersPageOpen && <FiltersPage />}
      <ProductsInfo
        currentPage={currentPage}
      />
      <ProductsFilter />
      <ProductList />
      <Pagination />
      <ProductsSlider />
    </div>
  );
}
