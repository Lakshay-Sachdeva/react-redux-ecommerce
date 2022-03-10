import styled from "styled-components";

export const Header = () => {
  return <Heading>Clone of E-Commerce</Heading>;
};

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  font-size: 42px;
  line-height: 28px;
  color: rgb(7, 34, 39)
`;
