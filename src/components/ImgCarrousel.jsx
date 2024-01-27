import { Col, Container } from "react-bootstrap";
import { product, assetsBaseUrl } from "../data";
import { useState } from "react";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const ImageCarrousel = () => {
  const [imageIndex, setImageIndex] = useState("image-product-1.jpg");
  const [clickedIndex, setClickedIndex] = useState(0);
  let images = 0;

  const changeImage = (itemIndex) => {
    setImageIndex(product.images.originals[itemIndex]);
    setClickedIndex(itemIndex);
  };
  return (
    <Col className="col-md-5 ms-md-5 ps-md-5 me-md-5">
      <img
        src={`http://${assetsBaseUrl}/${imageIndex}`}
        alt=""
        className="product-img"
      />
      <Container className="thumnails mt-4 p-0">
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
      <span
        className="previous-arrow bg-light rounded-5"
        onClick={() => changeImage((images -= 1))}
      >
        <PreviousArrow />
      </span>
      <span
        className="next-arrow bg-light rounded-5"
        onClick={() => changeImage(setClickedIndex(images += 1))}
      >
        <NextArrow />
      </span>
    </Col>
  );
};

export default ImageCarrousel;
