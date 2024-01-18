import { Container, Row, Col } from "react-bootstrap";
import { product } from "../data";
import User from "../assets/user-placeholder.png";
import Star from "./star";

const Review = () => {
  return (
    <Container className="my-5 position-relative">
      <Row className="ms-5 ps-5">
        <Col className="col-8 pe-0">
          <h1 className="ms-5">Customers reviews</h1>
        </Col>
        <Col className="p-0">
          <button className="review-btn px-5 py-3 border-0 rounded-4">
            Write a review
          </button>
        </Col>
      </Row>
      <span className="position-absolute start-50 ms-3 ps-5">
        <button className="text-decoration-underline border-0 bg-white">
          Delete
        </button>
        <button className="text-decoration-underline border-0 bg-white">
          Edit
        </button>
      </span>
      {product.reviews.map((review) => {
        return (
          <>
            <Row className="ms-5 ps-5 mt-5">
              <Col className="col-1 ms-5 pe-0">
                <img src={User} alt="" />
              </Col>
              <Col className="col-6 ps-0">
                <h6>{review.user}</h6>
                <span className="">
                  {review.starRating === 4 ? (
                    <>
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="none" stroke="currentColor" />
                    </>
                  ) : review.starRating === 5 ? (
                    <>
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                      <Star fill="#FAD409" stroke="#FAD409" />
                    </>
                  ) : null}
                </span>
                <p className="my-2 fw-bold">{review.headline}</p>
                <p className="text-secondary">{review.writtenReview}</p>
              </Col>
            </Row>
          </>
        );
      })}
    </Container>
  );
};

export default Review;
