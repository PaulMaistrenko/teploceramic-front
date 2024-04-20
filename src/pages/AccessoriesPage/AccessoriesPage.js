/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { MainContext } from "../../context/MainContext";
import { scrollToTop } from "../../helpers/scrollToTop";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";
import { ProductsInfo } from "../../components/ProductsInfo";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductList } from "../../components/ProductList";
import { Pagination } from "../../components/Pagination";
import { ProductsSlider } from "../../components/ProductsSlider/ProductSlider";

export const AccessoriesPage = () => {
  const {
    isFiltersPageOpen,
    currentPage,
    setCurrentPage,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Accessories');
    scrollToTop();
  }, []);

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