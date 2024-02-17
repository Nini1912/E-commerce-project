import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Container } from "react-bootstrap";
import { formSchema, formInitialValues } from "../validation";
import Star from "./star";
import { loggedInUser } from "../data";

const ReviewForm = ({
  setAddReviewFormVisible,
  setReviews,
  reviews,
  reviewToEdit,
  setReviewToEdit,
}) => {
  const submitForm = (values, { setSubmitting }) => {
    setTimeout(() => {
      if (reviewToEdit) {
        const editedReviews = reviews.map((review) => {
          if (review.user === loggedInUser.name) {
            return values;
          }
          return review;
        });

        setReviews(editedReviews);
      } else {
        setReviews([values, ...reviews]);
      }
      setAddReviewFormVisible(false);
      setReviewToEdit(null);
      setSubmitting(false);
    }, 1500);
  };

  const cancel = () => {
    setAddReviewFormVisible(false);
    setReviewToEdit(null);
  };

  return (
    <Container className="ms-md-5 ps-md-5 mb-md-5 mt-3">
      <Row className="ms-md-5 ps-md-5">
        <h2 className="ms-md-5 ps-md-4 fs-4 fw-bold mb-0">Add a review</h2>
      </Row>
      <Formik
        initialValues={reviewToEdit || formInitialValues}
        onSubmit={submitForm}
        validationSchema={formSchema}
      >
        {(formik) => {
          return (
            <Form>
              <Row className="ms-md-5 ps-md-5 mt-3">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <div className="fs-md-5 fs-6 fw-semibold mb-2">
                    Overall Rating
                  </div>
                  <div>
                    {[1, 2, 3, 4, 5].map((number) => (
                      <button
                        key={number}
                        type="button"
                        className="border-0 bg-transparent ps-0"
                        onClick={() =>
                          formik.setFieldValue("starRating", number)
                        }
                      >
                        <Star
                          width={44}
                          height={44}
                          strokeWidth={0.7}
                          isFilled={formik.values.starRating >= number}
                        />
                      </button>
                    ))}
                  </div>
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="starRating"
                  />
                </Col>
              </Row>
              <Row className="ms-md-5 ps-md-5">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <label
                    htmlFor="headline"
                    className="fs-md-5 fs-6 fw-semibold mt-2 mb-3"
                  >
                    Headline
                  </label>
                  <Field
                    name="headline"
                    type="text"
                    id="headline"
                    className="input border border-secondary-subtle border-2 rounded-3 p-2"
                    placeholder="What’s most important to know?"
                  />
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="headline"
                  />
                </Col>
              </Row>
              <Row className="ms-md-5 ps-md-5">
                <Col className="ms-md-5 ps-md-4 d-flex flex-column">
                  <label
                    htmlFor="writtenReview"
                    className="fs-md-5 fs-6 fw-semibold mt-md-3 mb-3"
                  >
                    Written review
                  </label>
                  <Field
                    name="writtenReview"
                    as="textarea"
                    rows={5}
                    cols={10}
                    id="writtenReview"
                    className="input border border-secondary-subtle border-2 rounded-3 p-2"
                    placeholder="What did you like or dislike? What did you use this product for?"
                  />
                  <ErrorMessage
                    className="text-danger mt-2"
                    component="p"
                    name="writtenReview"
                  />
                </Col>
              </Row>
              <Row className="ms-5 ps-3">
                <Col>
                  <div className="d-flex justify-content-end w-md-50 ms-5">
                    <button
                      type="button"
                      className="cancel-btn border-0 py-3 px-4 rounded-4 me-4 mt-3"
                      onClick={cancel}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="button submit-btn border-0 py-3 px-4 rounded-4 mt-3"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting ? "Submiting..." : "Submit"}
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default ReviewForm;
