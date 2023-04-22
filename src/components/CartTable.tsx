import { FC, useState, useEffect } from "react";
import { ICart } from "../interfaces/cart";
import { calculateTotal } from "../services/productService";
import { useNavigate } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  cartItems: ICart[];
  onRemoveItem: (id: number | string) => void;
}

export const CartTable: FC<Props> = ({ cartItems, onRemoveItem }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setTotal(calculateTotal(cartItems));
  }, [cartItems]);
  return (
    <>
      <table className="table table-hover table-striped table-responsive w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ product, quantity, total }) => (
            <tr key={product.id}>
              <td>{product.name}</td>

              <td>{product.price}</td>
              <td>{quantity}</td>
              <td>{total * quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onRemoveItem(product.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3} className="text-end fw-bold">
              Total:
            </td>
            <td colSpan={1} className="text-end fw-bold">
              {total}
            </td>
          </tr>
        </tfoot>
      </table>

      <button onClick={() => navigate("/catalog")} className="btn btn-success">
        Seguir comprando
      </button>
    </>
  );
};
