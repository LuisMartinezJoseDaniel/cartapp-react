import { FC, useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCard } from "./ProductCard";
import { Product } from "../interfaces";

interface Props {
  children?: React.ReactNode;
  onAddProductToCart: (product: Product) => void;
}

export const CatalogView: FC<Props> = ({ onAddProductToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);
  return (
    <div className="row">
      {products.map((product) => (
        <ProductCard
          onAddProductToCart={onAddProductToCart}
          product={product}
          key={product.id}
        />
      ))}
    </div>
  );
};
