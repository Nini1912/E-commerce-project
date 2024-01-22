import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import Cart from "./Cart";

const Counter = ({ setProductsInCart, productNumber, setProductNumber }) => {
  const dicrease = () => {
    if (productNumber > 0) {
      setProductNumber(productNumber - 1);
    }
  };

  const increase = () => {
    setProductNumber(productNumber + 1);
  };

  const addToCart = () => {
    setProductsInCart(productNumber);
  };

  return (
    <div className="counter mt-3">
      <button
        className="count-btn minus pb-3 px-4 pt-2 border-0"
        onClick={dicrease}
      >
        <img src={Minus} alt="" />
      </button>
      <span className="count fw-bold m-0 pt-2 pb-3 px-3">{productNumber}</span>
      <button
        className="count-btn plus pb-3 px-4 pt-2 me-3 border-0"
        onClick={increase}
      >
        <img src={Plus} alt="" />
      </button>
      <button
        className="add-to-cart-btn button px-5 py-3 border-0 rounded-4"
        onClick={addToCart}
      >
        <Cart fill="white" />
        <span className="ms-3">Add to cart</span>
      </button>
    </div>
  );
};

export default Counter;
