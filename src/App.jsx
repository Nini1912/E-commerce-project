import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import ImageCarrousel from "./components/ImgCarrousel";
import ProductDescription from "./components/productDescription";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-5">
        <Row>
          <Col className="col-1 me-5"></Col>
          <ImageCarrousel />
          <ProductDescription />
        </Row>
      </Container>
    </>
  );
}

export default App;
