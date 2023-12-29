import CartItem from "./CartItem";

const Cart = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, i) => (
        <CartItem key={i} />
      ))}
    </>
  );
};
export default Cart;
