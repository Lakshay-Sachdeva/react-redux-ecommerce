import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((el) => {
    return (
      <Link key={el.id} to={`/products/${el.id}`}>
        <figure>
          <img src={el.image} alt="" />
          <figcaption>{el.description}</figcaption>
        </figure>
      </Link>
    );
  });

  return <>{renderList}</>;
};
