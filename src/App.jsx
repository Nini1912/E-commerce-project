import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";
import { useState } from "react";

function App() {
  const [productsInCart, setProductsInCart] = useState(0);
  return (
    <>
      <NavBar productsInCart={productsInCart} />
      <Container className="mt-5">
        <Row>
          <Col className="col-1 me-5"></Col>
          <ImageCarrousel />
          <ProductDescription setProductsInCart={setProductsInCart} />
        </Row>
      </Container>
    </>
  );
}

export default App;
