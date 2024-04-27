/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { ProductList } from "../../components/ProductList";
import { ProductsFilter } from "../../components/ProductsFilter";
import { CategoryInfo } from "../../components/CategoryInfo";
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";
import { Pagination } from "../../components/Pagination";
import { ProductsSlider } from "../../components/ProductsSlider/ProductSlider";
import { scrollToTop } from "../../helpers/scrollToTop";
import { QuestionsBlock } from "../../components/QuestionsBlock";

export const DehydratorsPage = () => {
  const {
    isFiltersPageOpen,
    setCurrentPage,
  } = useContext(MainContext);

  useEffect (() => {
    setCurrentPage('Dehydrators');
    scrollToTop();
  }, []);

  return (
    <div className="products__page">
      {isFiltersPageOpen && <FiltersPage />}
      <CategoryInfo />
      <ProductsFilter />
      <ProductList />
      <Pagination />
      <ProductsSlider title="RECOMENDED PRODUCTS" />
      <QuestionsBlock />
    </div>
  );
}
