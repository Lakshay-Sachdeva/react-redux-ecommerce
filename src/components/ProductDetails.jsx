import styled from "styled-components";
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
    <Container>
      <ImageDiv>
        <Image src={product.image} alt={product.title} />
      </ImageDiv>
      <DataDiv>
        <h1>{product.title}</h1>
        <h4>{product.description}</h4>
        <h4>Price: $ {product.price}</h4>
      </DataDiv>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10%;
  justify-content: center;
  align-items: center;
`;

const ImageDiv = styled.div`
  width: 30vw;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const DataDiv = styled.div`
  width: 30vw;
  marign- left: 50px;

  h1{
    font-size: 26px;
    font-weight: 600;
    color: rgb(7, 34, 39)
  }

  h4{
    font-size: 20px;
    font-weight: 300;
    marign: 20px auto;
  }

`;
