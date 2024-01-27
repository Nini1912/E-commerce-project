import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import Cart from "./Cart";
import { Col, Row } from "react-bootstrap";

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
    <Row className="counter mt-3">
      <Col className="col-md-5 mb-3 pe-0 me-3 ms-md-0 ms-4">
        <button
          className="count-btn minus pb-3 px-md-4 pt-2 border-0 ps-4 pe-5"
          onClick={dicrease}
        >
          <img src={Minus} alt="" />
        </button>
        <span className="count fw-bold m-0 pt-2 pb-3 px-md-3">
          {productNumber}
        </span>
        <button
          className="count-btn plus pb-3 px-md-4 pt-2 border-0 ps-5 pe-4"
          onClick={increase}
        >
          <img src={Plus} alt="" />
        </button>
      </Col>
      <Col className="mb-3 ps-0 ms-md-0 ms-4">
        <button
          className="add-to-cart-btn button px-md-5 py-md-3 border-0 rounded-4"
          onClick={addToCart}
        >
          <Cart fill="white" />
          <span className="ms-3">Add to cart</span>
        </button>
      </Col>
    </Row>
  );
};

export default Counter;
