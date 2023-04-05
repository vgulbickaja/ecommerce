import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/ShopContextProvider";
import { useContext } from "react";
import { CartItem } from "./CartItem";
import "./Cart.scss";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  //47:29
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1> Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <div className="subtotal">
            <h6>Subtotal: {totalAmount} €</h6>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              {" "}
              Checkout{" "}
            </button>
          </div>
        </div>
      ) : (
        <h1> Your Cart is Empty.</h1>
      )}
    </div>
  );
};
