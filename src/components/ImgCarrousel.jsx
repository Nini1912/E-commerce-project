import { Col, Container } from "react-bootstrap";
import { product, assetsBaseUrl } from "../data";
import { useState } from "react";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const ImageCarrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Col className="col-md-5 ms-md-5 ps-md-5 me-md-5">
      <img
        src={`http://${assetsBaseUrl}/${product.images.originals[activeIndex]}`}
        alt=""
        className="product-img"
      />
      <Container className="thumnails mt-4 p-0">
        {product.images.thumbnails.map((item, index) => {
          return (
            <button
              className="border-0 bg-white"
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={`http://${assetsBaseUrl}/${item}`}
                alt=""
                className={
                  index === activeIndex
                    ? "clicked-thumbnail"
                    : "product-thumbnail"
                }
              />
            </button>
          );
        })}
      </Container>
      <span
        className="previous-arrow bg-light rounded-5"
        onClick={() => activeIndex > 0 && setActiveIndex(activeIndex - 1)}
      >
        <PreviousArrow />
      </span>
      <span
        className="next-arrow bg-light rounded-5"
        onClick={() => activeIndex < 3 && setActiveIndex(activeIndex + 1)}
      >
        <NextArrow />
      </span>
    </Col>
  );
};

export default ImageCarrousel;
