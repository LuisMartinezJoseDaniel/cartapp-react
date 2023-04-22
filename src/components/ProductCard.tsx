import { FC } from "react";
import { Product } from "../interfaces";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
  onAddProductToCart: (product: Product) => void;
}

export const ProductCard: FC<Props> = ({ product, onAddProductToCart }) => {
  const { name, description, price } = product;
  const navigate = useNavigate();
  const onAddProduct = () => {
    onAddProductToCart(product);
    navigate("/cart");
  };

  return (
    <div className="col-4 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{price}</p>
          <button onClick={() => onAddProduct()} className="btn btn-primary">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
