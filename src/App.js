import { useEffect } from "react";
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showCart = useSelector((state) => state.cartToggler);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-f6bc6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    sendCartData().catch((error) => {
      console.log(error);
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
