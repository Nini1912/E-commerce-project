import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";
import Review from "./components/Review";
import AddReview from "./components/AddReview";
import { useState } from "react";
import { loggedInUser } from "./data";

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  const [cartIsClicked, setCartIsClicked] = useState(false);
  const [productNumber, setProductNumber] = useState(0);
  const [writeReviwBtnIsClicked, setWriteReviwBtnIsClicked] = useState(false);
  const [newReview, setNewReview] = useState({
    user: loggedInUser.name,
    starRating: 0,
    writtenReview: "",
    headline: "",
  });
  return (
    <>
      <NavBar
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        cartIsClicked={cartIsClicked}
        setCartIsClicked={setCartIsClicked}
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
      {!writeReviwBtnIsClicked && (
        <Review
          setWriteReviwBtnIsClicked={setWriteReviwBtnIsClicked}
          newReview={newReview}
          setNewReview={setNewReview}
        />
      )}
      {writeReviwBtnIsClicked && (
        <AddReview
          setWriteReviwBtnIsClicked={setWriteReviwBtnIsClicked}
          newReview={newReview}
          setNewReview={setNewReview}
          writeReviwBtnIsClicked={writeReviwBtnIsClicked}
        />
      )}
    </>
  );
}

export default App;
