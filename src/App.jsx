import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";
import Review from "./components/Review";
import AddReview from "./components/AddReview";
import { useState } from "react";

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  const [cartIsClicked, setCartIsClicked] = useState(false);
  const [productNumber, setProductNumber] = useState(0);
  const [writeReviwBtnIsClicked, setWriteReviwBtnIsClicked] = useState(false);
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
        <Row>
          <Col className="col-1 me-5"></Col>
          <ImageCarrousel />
          <ProductDescription
            setProductsInCart={setProductsInCart}
            productNumber={productNumber}
            setProductNumber={setProductNumber}
          />
        </Row>
      </Container>
      {!writeReviwBtnIsClicked && (
        <Review setWriteReviwBtnIsClicked={setWriteReviwBtnIsClicked} />
      )}
      {writeReviwBtnIsClicked && (
        <AddReview setWriteReviwBtnIsClicked={setWriteReviwBtnIsClicked} />
      )}
    </>
  );
}

export default App;
