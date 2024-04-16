import { ProductList } from "../../components/ProductList";
import { ProductsFilter } from "../../components/ProductsFilter";
import { ProductsInfo } from "../../components/ProductsInfo";

export const DehydratorsPage = () => {
  return (
    <div className="products__page">
      <ProductsInfo />
      <ProductsFilter />
      <ProductList />
    </div>
  );
}
