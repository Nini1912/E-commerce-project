import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";
import { useState } from "react";

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  const [cartIsClicked, setCartIsClicked] = useState(false);
  const [productNumber, setProductNumber] = useState(0);
  return (
    <>
      <NavBar
        productsInCart={productsInCart}
        setProductsInCart={setProductsInCart}
        cartIsClicked={cartIsClicked}
        setCartIsClicked={setCartIsClicked}
        setProductNumber={setProductNumber}
      />
      <Container className="mt-5">
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
    </>
  );
}

export default App;
