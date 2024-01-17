import { Col } from "react-bootstrap";
import Star from "./star";
import Counter from "./Counter";

const ProductDescription = ({
  setProductsInCart,
  productNumber,
  setProductNumber,
}) => {
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
      <Counter
        setProductsInCart={setProductsInCart}
        productNumber={productNumber}
        setProductNumber={setProductNumber}
      />
    </Col>
  );
};

export default ProductDescription;
