import { Container, Row, Col } from "react-bootstrap";
import Bin from "../assets/icon-delete.svg";
import { assetsBaseUrl, product } from "../data";

const CartContainer = ({
  productsInCart,
  cartVisible,
  setCartVisible,
  setProductsInCart,
  setProductNumber,
}) => {
  const deleteBtn = () => {
    setProductNumber(0);
    setProductsInCart(0);
  };
  return (
    <>
      {productsInCart !== 0 && (
        <span className="products-in-cart rounded-circle">
          {productsInCart}
        </span>
      )}
      {cartVisible && (
        <div className="cart-product-div rounded">
          <h5
            className="fw-bolder w-100 mt-3 ps-4 pb-3 border-bottom"
          >
            Cart
          </h5>
          {productsInCart === 0 && (
            <div className="d-flex justify-content-center w-100">
              <h5 className="cart-text">Your cart is empty.</h5>
            </div>
          )}
          {productsInCart > 0 && (
            <Container>
              <Row className="mt-4 ps-2">
                <Col className="col-3 pe-0">
                  <img
                    className="w-75 rounded"
                    src={`https://${assetsBaseUrl}/${product.images.thumbnails[0]}`}
                    alt=""
                  />
                </Col>
                <Col className="col-7 p-0 cart-text">
                  <p className="mb-1">Fall Limited Edition Sneakers</p>
                  <span>$125.00 x {productsInCart} </span>
                  <span className="fw-bold" style={{ color: "#272727" }}>
                    ${(125 * productsInCart).toFixed(2)}
                  </span>
                </Col>
                <Col className="col-1 p-0">
                  <img
                    className="w-75 mt-3 ms-3"
                    src={Bin}
                    alt=""
                    onClick={deleteBtn}
                  />
                </Col>
              </Row>
              <button
                className="checkout-btn button w-100 px-5 py-3 border-0 rounded-4 mt-4"
                onClick={() => {
                  setCartVisible(false);
                }}
              >
                Chekout
              </button>
            </Container>
          )}
        </div>
      )}
    </>
  );
};

export default CartContainer;
