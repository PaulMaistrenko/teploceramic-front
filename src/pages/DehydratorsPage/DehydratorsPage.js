import { useContext } from "react";
import { ProductList } from "../../components/ProductList";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsInfo } from "../../components/ProductsInfo";
import { MainContext } from "../../context/MainContext";
import { FiltersPage } from "../../components/FiltersPage/FiltersPage";

export const DehydratorsPage = () => {
  const {
    isFiltersPageOpen,
  } = useContext(MainContext);

  return (
    <div className="products__page">
      {isFiltersPageOpen && <FiltersPage />}
      <ProductsInfo />
      <ProductsFilter />
      <ProductList />
    </div>
  );
}
