import { Col, Container } from "react-bootstrap";
import { product, assetsBaseUrl } from "../data";

const ImageCarrousel = () => {
  return (
    <Col className="col-5">
      <img
        src={`http://${assetsBaseUrl}/${product.images.originals[0]}`}
        alt=""
        className="product-img"
      />
      <Container className="mt-4 p-0">
        {product.images.thumbnails.map((item, index) => {
          return (
            <img
              key={index}
              src={`http://${assetsBaseUrl}/${item}`}
              alt=""
              className="product-thumbnail me-4"
            />
          );
        })}
      </Container>
    </Col>
  );
};

export default ImageCarrousel;
