import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const cartToggler = useSelector((state) => state.cartToggler);

  return (
    <Layout>
      {cartToggler && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
