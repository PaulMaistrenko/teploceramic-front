import { useContext, useEffect } from "react";
import { CategoryInfo } from "../../components/CategoryInfo";
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
      <CategoryInfo
        currentPage={currentPage}
      />
      <ProductsFilter />
      <ProductList />
      <Pagination />
      <ProductsSlider />
    </div>
  );
}
