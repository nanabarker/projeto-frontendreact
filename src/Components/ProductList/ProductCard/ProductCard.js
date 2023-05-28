import {
  Button,
  CardTextBox,
  Image,
  ImageBox,
  ProductCardStyle,
} from "./ProductCardStyle";

export default function ProductCard({ productList, addProductToCart }) {
  // console.log(productList);
  return (
    <ProductCardStyle>
      <ImageBox>
        <Image src={productList.imageUrl} />
      </ImageBox>
      <CardTextBox>
        <p>{productList.name}</p>
        <p>R${productList.value}</p>
        <Button onClick={() => addProductToCart(productList)}>
          Adicionar Item
        </Button>
      </CardTextBox>
    </ProductCardStyle>
  );
}
