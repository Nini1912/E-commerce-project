import { Col, Container } from "react-bootstrap";
import { product, assetsBaseUrl } from "../data";
import { useState } from "react";

const ImageCarrousel = () => {
  const [imageIndex, setImageIndex] = useState("image-product-1.jpg");
  const [clickedIndex, setClickedIndex] = useState(0);

  const changeImage = (itemIndex) => {
    setImageIndex(product.images.originals[itemIndex]);
    setClickedIndex(itemIndex);
  };
  return (
    <Col className="col-5">
      <img
        src={`http://${assetsBaseUrl}/${imageIndex}`}
        alt=""
        className="product-img"
      />
      <Container className="mt-4 p-0">
        {product.images.thumbnails.map((item, index) => {
          if (index === clickedIndex) {
            return (
              <img
                key={index}
                src={`http://${assetsBaseUrl}/${item}`}
                alt=""
                className="clicked-thumbnail"
                onClick={() => changeImage(index)}
              />
            );
          } else {
            return (
              <img
                key={index}
                src={`http://${assetsBaseUrl}/${item}`}
                alt=""
                className="product-thumbnail"
                onClick={() => changeImage(index)}
              />
            );
          }
        })}
      </Container>
    </Col>
  );
};

export default ImageCarrousel;
