import { Container, Row, Col } from "react-bootstrap";
import { loggedInUser, assetsBaseUrl } from "../data";
import User from "../assets/user-placeholder.png";
import Star from "./star";

const Review = ({
  setAddReviewFormVisible,
  reviews,
  setReviews,
  setReviewToEdit,
}) => {
  const handleEditToggle = (review) => {
    setReviewToEdit(review);
    setAddReviewFormVisible(true);
  };

  const deleteReview = (reviewIndex) => {
    setReviews(reviews.filter((_, index) => index !== reviewIndex));
  };

  const alreadyWroteReview = () => {
    return reviews.some((review) => review.user === loggedInUser.name);
  };

  return (
    <Container className="my-md-5 position-relative">
      <Row className="ms-md-5 ps-md-5 ms-1">
        <Col className="col-md-8 col-8 pe-md-0">
          <h1 className="ms-md-5 fs-3 fw-bold">Customer reviews</h1>
        </Col>
        <Col className="p-md-0">
          {!alreadyWroteReview() && (
            <button
              className="button px-md-5 py-md-3 border-0 rounded-md-4 rounded-3 px-4 py-2"
              onClick={() => {
                setAddReviewFormVisible(true);
              }}
            >
              <span className="write-review">Write a review</span>
              <span className="add-review">Add</span>
            </button>
          )}
        </Col>
      </Row>
      {reviews.map((review, reviewIndex) => {
        return (
          <Container key={reviewIndex} className="ms-md-5 mt-md-5 mt-4">
            <Row className="ms-md-5">
              <Col className="col-md-1 col-12 ms-md-5 pe-0">
                <img
                  className="profile-img"
                  src={
                    loggedInUser.name === review.user
                      ? `https:/${assetsBaseUrl}/${loggedInUser.profileImage}`
                      : User
                  }
                  alt=""
                />
              </Col>
              <Col className="col-6 ps-md-0">
                {loggedInUser.name === review.user && (
                  <span className="position-absolute start-50 ms-3 ps-5 mt-3">
                    <button
                      type="button"
                      className="text-decoration-underline border-0 bg-white"
                      onClick={() => deleteReview(reviewIndex)}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="text-decoration-underline border-0 bg-white"
                      onClick={() => handleEditToggle(review)}
                    >
                      Edit
                    </button>
                  </span>
                )}
                <h6 className="mt-md-0 mt-2">{review.user}</h6>
                <span>
                  {[1, 2, 3, 4, 5].map((number) => (
                    <Star
                      key={number}
                      width={24}
                      height={24}
                      strokeWidth={2}
                      isFilled={review.starRating >= number}
                    />
                  ))}
                </span>
                <p className="my-2 fw-bold">{review.headline}</p>
                <p className="text-secondary written-review">
                  {review.writtenReview}
                </p>
              </Col>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};

export default Review;
