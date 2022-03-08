import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setProducts } from "../redux/actions/Action";
import { ProductComponent } from "./ProductComponent";

export const ProductList = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <ProductComponent />
    </div>
  );
};
