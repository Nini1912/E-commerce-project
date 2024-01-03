import { Col } from "react-bootstrap";
import Star from "./star";
import Plus from "../assets/icon-plus.svg";
import Minus from "../assets/icon-minus.svg";
import Cart from "./Cart";

const ProductDescription = () => {
  return (
    <Col className="col-4 pt-5">
      <h3 className="company-name">Sneaker Company</h3>
      <h1 className="product-category mb-4">Fall Limited Edition Sneakers</h1>
      <span className="star-span pt-2 px-3 pb-3">
        <Star fill="#FAD409" stroke="#FAD409" />
        <Star fill="#FAD409" stroke="#FAD409" />
        <Star fill="#FAD409" stroke="#FAD409" />
        <Star fill="none" stroke="currentColor" />
        <Star fill="none" stroke="currentColor" />
      </span>
      <span className="rate-span pt-2 pe-3 pb-3">4.2 out of 5</span>
      <p className="product-description mt-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price-div mt-4">
        <h3 className="fw-bold me-3">$125.00</h3>
        <p className="fw-bold px-2 mt-2 rounded">50%</p>
      </div>
      <p className="old-price text-decoration-line-through">$250.00</p>
      <div className="counter mt-3">
        <button className="count-btn minus pb-3 px-4 pt-2 border-0">
          <img src={Minus} alt="" />
        </button>
        <span className="count fw-bold m-0 pt-2 pb-3 px-3">0</span>
        <button className="count-btn plus pb-3 px-4 pt-2 me-3 border-0">
          <img src={Plus} alt="" />
        </button>
        <button className="add-to-cart-btn px-5 py-3 border-0 rounded-4">
          <Cart fill="white" />
          <span className="ms-3">Add to cart</span>
        </button>
      </div>
    </Col>
  );
};

export default ProductDescription;
