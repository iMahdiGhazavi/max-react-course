import { useSelector, useDispatch } from "react-redux";
import { cartTogglerActions } from "../../store/cart-toggler";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggler = useSelector((state) => state.cartToggler);

  const toggleCartHandler = () => {
    dispatch(cartTogglerActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
