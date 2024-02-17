import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";
import Review from "./components/Review";
import ReviewForm from "./components/ReviewForm";
import { useState } from "react";
import { product } from "./data";

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  const [productNumber, setProductNumber] = useState(0);
  const [addReviewFormVisible, setAddReviewFormVisible] = useState(false);
  const [reviews, setReviews] = useState(product.reviews);
  const [reviewToEdit, setReviewToEdit] = useState(null);

  return (
    <>
      <NavBar
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        setProductNumber={setProductNumber}
      />
      <Container className="product-div mt-5">
        <Row className="ms-md-5 ps-md-5">
          <ImageCarrousel />
          <ProductDescription
            setProductsInCart={setProductsInCart}
            productNumber={productNumber}
            setProductNumber={setProductNumber}
          />
        </Row>
      </Container>
      {!addReviewFormVisible && (
        <Review
          setAddReviewFormVisible={setAddReviewFormVisible}
          reviews={reviews}
          setReviews={setReviews}
          setReviewToEdit={setReviewToEdit}
        />
      )}
      {addReviewFormVisible && (
        <ReviewForm
          setAddReviewFormVisible={setAddReviewFormVisible}
          reviewToEdit={reviewToEdit}
          setReviewToEdit={setReviewToEdit}
          setReviews={setReviews}
          reviews={reviews}
        />
      )}
    </>
  );
}

export default App;
