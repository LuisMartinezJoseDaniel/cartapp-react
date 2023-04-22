import { Navigate, Route, Routes } from "react-router-dom";
import { CartTable } from "../components/CartTable";
import { CatalogView } from "../components/CatalogView";
import { useCart } from "../hooks/useCart";

export const CartRoutes = () => {
  const { cartItems, onAddProductToCart, onRemoveItem } = useCart();

  return (
    <Routes>
      <Route
        path="catalog"
        element={<CatalogView onAddProductToCart={onAddProductToCart} />}
      />
      <Route
        path="cart"
        element={
          cartItems.length > 0 ? (
            <section className="my-4 w-50">
              <h2>Carrito de compras</h2>
              <CartTable onRemoveItem={onRemoveItem} cartItems={cartItems} />
            </section>
          ) : (
            <div className="alert alert-warning">
              Sin elementos en el carrito
            </div>
          )
        }
      />
      <Route path="/" element={<Navigate to="/catalog" />}></Route>
    </Routes>
  );
};
