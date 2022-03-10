import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((el) => {
    return (
      <Container>
        <Link key={el.id} to={`/products/${el.id}`}>
          <Figure>
            <Image src={el.image} alt="" />
            <figcaption>{el.description}</figcaption>
          </Figure>
        </Link>
      </Container>
    );
  });

  return <>{renderList}</>;
};

const Container = styled.div`
  display: flex;
  gap: 5%;
  postion: absolute;
`;

const Figure = styled.figure`
  position: relative;
  width: 20%;
`;

const Image = styled.img`
  width: 80%;
`;
