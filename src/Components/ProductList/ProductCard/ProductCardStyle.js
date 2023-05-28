import styled from "styled-components";

export const ProductCardStyle = styled.div`
  border: 2px solid black;
  width: 20%;
  height: 400px;
  margin-top: 1vh;
  background-color: black;
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 75%;
`;

export const ImageBox = styled.div`
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardTextBox = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
