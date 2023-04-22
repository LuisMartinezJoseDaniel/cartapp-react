import { Navbar } from "./components/Navbar";

import { CartRoutes } from "./routes/CartRoutes";
export const CartApp = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <CartRoutes />
      </main>
    </>
  );
};
