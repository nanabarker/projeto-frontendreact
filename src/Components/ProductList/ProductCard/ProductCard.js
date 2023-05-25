import {
  ButtonStyle,
  CardTextBox,
  Image,
  ProductCardStyle,
} from "./ProductCardStyle";

export default function ProductCard({ productList }) {
  console.log(productList);
  return (
    <ProductCardStyle>
      <Image src={productList.imageUrl} />
      <CardTextBox>
        <p>{productList.name}</p>
        <p>{productList.value}</p>
        <ButtonStyle>Adicionar Item</ButtonStyle>
      </CardTextBox>
    </ProductCardStyle>
  );
}
