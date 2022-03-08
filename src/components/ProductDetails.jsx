import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, removeSelectedProduct } from "../redux/actions/Action";

export const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
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
        <h4>Price: $ {product.price}</h4>
      </div>
    </div>
  );
};
