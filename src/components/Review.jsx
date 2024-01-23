import { Container, Row, Col } from "react-bootstrap";
import { product } from "../data";
import User from "../assets/user-placeholder.png";
import Star from "./star";

const Review = ({ setWriteReviwBtnIsClicked }) => {
  return (
    <Container className="my-5 position-relative">
      <Row className="ms-5 ps-5">
        <Col className="col-8 pe-0">
          <h1 className="ms-5">Customers reviews</h1>
        </Col>
        <Col className="p-0">
          <button
            className="button px-5 py-3 border-0 rounded-4"
            onClick={() => {
              setWriteReviwBtnIsClicked(true);
            }}
          >
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
      {product.reviews.map((review, reviewIndex) => {
        return (
          <Container key={reviewIndex} className="ms-5 mt-5">
            <Row className="ms-5">
              <Col className="col-1 ms-5 pe-0">
                <img src={User} alt="" />
              </Col>
              <Col className="col-6 ps-0">
                <h6>{review.user}</h6>
                <span className="">
                  {review.starRating === 4 ? (
                    <>
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="none"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                    </>
                  ) : review.starRating === 5 ? (
                    <>
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                      <Star
                        fill="#FAD409"
                        stroke="#FAD409"
                        width={24}
                        height={24}
                        strokeWidth={2}
                      />
                    </>
                  ) : null}
                </span>
                <p className="my-2 fw-bold">{review.headline}</p>
                <p className="text-secondary">{review.writtenReview}</p>
              </Col>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};

export default Review;
