import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../redux/actions/Action";
import { ProductComponent } from "./ProductComponent";

export const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};
