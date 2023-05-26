import {
  Button,
  CardTextBox,
  Image,
  ProductCardStyle,
} from "./ProductCardStyle";

export default function ProductCard({ productList, addProductToCart }) {
  // console.log(productList);
  return (
    <ProductCardStyle>
      <Image src={productList.imageUrl} />
      <CardTextBox>
        <p>{productList.name}</p>
        <p>{productList.value}</p>
        <Button onClick={() => addProductToCart(productList)}>
          Adicionar Item
        </Button>
      </CardTextBox>
    </ProductCardStyle>
  );
}
