import { FC, useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCard } from "./ProductCard";
import { Product } from "../interfaces";
import { Loading } from "./Loading";

interface Props {
  children?: React.ReactNode;
  onAddProductToCart: (product: Product) => void;
}

export const CatalogView: FC<Props> = ({ onAddProductToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const findProducts = async () => {
      setIsLoading(true);
      const products = await getProducts();
      setIsLoading(false);
      setProducts(products);
    };
    findProducts();
  }, []);
  return (
    <div className="row">
      {isLoading ? (
        <Loading />
      ) : (
        products.map((product) => (
          <ProductCard
            onAddProductToCart={onAddProductToCart}
            product={product}
            key={product.id}
          />
        ))
      )}
    </div>
  );
};
