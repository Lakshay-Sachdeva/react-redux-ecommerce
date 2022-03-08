import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct, removeSelectedProduct } from "../redux/actions/Action";

export const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => console.log(err));

    dispatch(selectProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();

      return () => {
        dispatch(removeSelectedProduct());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId]);

  return (
    <div>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        {/* <h4>Rating: {product.rating.rate}</h4> */}
        <h4>Price: Rs {product.price}</h4>
      </div>
    </div>
  );
};
